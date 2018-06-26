/* This file shows two options for getting specific user data.
 * These examples use axios for requests.
 */
 
//Get specific user from /_api/SP.UserProfiles.PeopleManager/GetPropertiesFor
function getUserProfile(userEmail) {
    const userAccount = 'i:0#.f|membership|' + userEmail;
    const encodedAccount = encodeURIComponent(userAccount).toLowerCase();
    const requestUrl = "https://YOURSITE.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v=%27" + encodedAccount + "%27";

    axios.get(requestUrl)
        .then(function(response) {
            const userData = response.data.UserProfileProperties;
            displayArrData(userData, 'data-a');
        })
        .catch(function(error) {
            console.log(error);
        });
}

//Get specific user from /_api/Web/SiteUserInfoList
function getSiteUserList(userEmail) {

    const requestUrl = "https://YOURSITE.sharepoint.com/_api/Web/SiteUserInfoList/items?$filter=UserName eq '" + userEmail + "'";
    console.log('running')

    axios.get(requestUrl)
        .then(function(response) {
            const userData = response.data.value[0];
            console.log(userData)
            console.log(displayObjData(userData, 'data-b'));

        })
        .catch(function(error) {
            console.log(error);
        });
}
