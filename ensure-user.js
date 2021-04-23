	function ensureUser(email) {
		const siteUrl = '[SP SITE]';
		return getFormDigest(siteUrl).then(function (data) {
			$.ajax({
				url: siteUrl + '/_api/web/ensureuser',
				type: 'POST',
				data: "{ 'logonName': 'i:0#.f|membership|" + email + "' }",
				headers: {
					'X-RequestDigest':
						data.d.GetContextWebInformation.FormDigestValue,
                    'Accept': 'application/json;odata=verbose',
					'Content-Type': 'application/json;odata=verbose',
				},
				success: function (data) {
					console.log(data.d);
				},
				error: function (xhr, status, error) {
					console.log(xhr, status, error);
				},
			});
		});
	}

	function getFormDigest(siteUrl) {
		return $.ajax({
			url: siteUrl + '/_api/contextinfo',
			method: 'POST',
			headers: { Accept: 'application/json; odata=verbose' },
		});
	}
