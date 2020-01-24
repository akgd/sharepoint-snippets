function getUserDetails(email) {
    if (email) {
        var userAccount = 'i:0#.f|membership|' + email;
        var encodedAccount = encodeURIComponent(userAccount).toLowerCase();
        var requestURL = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v=%27" + encodedAccount + "%27";
        $.ajax({
            url: requestURL,
            type: 'GET',
            headers: {
                'accept': 'application/json;odata=verbose'
            },
            success: function (data) {
                console.log(data.d)
            },
            error: function (xhr) {
                console.log(xhr.status + ': ' + xhr.statusText);
            }
        });
    }
}
