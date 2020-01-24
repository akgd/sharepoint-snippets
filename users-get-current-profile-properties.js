/* Requires jQuery */
function getUserDetails() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + '/_api/SP.UserProfiles.PeopleManager/GetMyProperties',
        type: 'GET',
        headers: { Accept: 'application/json;odata=verbose' },
        success: function(data) {

            var properties = data.d.UserProfileProperties.results;

            var userData = {};

            for (var i = 0; i < properties.length; i++) {

                var property = properties[i];

                if (property.Key === 'AccountName') {
                    userData.accountName = property.Value;
                }
                if (property.Key === 'FirstName') {
                    userData.firstName = property.Value;
                }
                if (property.Key === 'LastName') {
                    userData.lastName = property.Value;
                }
                if (property.Key === 'PreferredName') {
                    userData.preferredName = property.Value;
                }
                if (property.Key === 'Manager') {
                    userData.manager = property.Value;
                }
                if (property.Key === 'WorkEmail') {
                    userData.email = property.Value;
                }
                if (property.Key === 'PictureURL') {
                    userData.pictureUrl = property.Value;
                }
                if (property.Key === 'Department') {
                    userData.department = property.Value;
                }
                if (property.Key === 'Title') {
                    userData.jobTitle = property.Value;
                }
                if (property.Key === 'WorkPhone') {
                    userData.phone = property.Value;
                }
                if (property.Key === 'Office') {
                    userData.office = property.Value;
                }
                if (property.Key === 'Level') {
                    userData.level = property.Value;
                }
                if (property.Key === 'employeeID') {
                    userData.employeeId = property.Value;
                }
            }
            //console.log(userData)

        },
        error: function(xhr) {
            console.log(xhr.status + ': ' + xhr.statusText);
        }
    });
}
