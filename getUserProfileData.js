function getUserDetails() {
    $.ajax({
        url: spPageContextInfo.webAbsoluteUrl + '/_api/SP.UserProfiles.PeopleManager/GetMyProperties',
        headers: { Accept: "application/json;odata=verbose" },
        success: function(data) {
            //console.log(data);
            var userProfileProps = data.d.UserProfileProperties.results;

            var userData = {
                displayName: data.d.DisplayName,
                accountName: data.d.AccountName,
                email: data.d.Email,
                picture: data.d.PictureUrl,
                jobTitle: data.d.Title,
                lastName: userProfileProps[6].Value,
                firstName: userProfileProps[4].Value,
                phone: userProfileProps[10].Value,
                manager: userProfileProps[15].Value,
                department: userProfileProps[11].Value,
                office: userProfileProps[61].Value,
            }
            //console.log(userData);
        },
        error: function(xhr) {
            console.log(xhr.status + ": " + xhr.statusText);
        }
    });

}
