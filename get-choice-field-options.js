var requestURL = "https://[TENANT]/sites/[SITE]/_api/web/lists/GetByTitle('[LIST NAME]')/fields?$filter=EntityPropertyName eq '[FIELD INTERNAL NAME]'";

$.ajax({
    url: requestURL,
    type: 'GET',
    headers: {
        'accept': 'application/json;odata=verbose'
    },
    success: function (data) {
        var opts = data.d.results[0].Choices.results;
    },
    error: function (xhr) {
        alert(xhr.status + ': ' + xhr.statusText);
    }
});
