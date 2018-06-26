//jQuery required

function isSpGroupMember(spGroupName) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('" + spGroupName + "')/Users?$filter=Id eq " + _spPageContextInfo.userId,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            if (data.d.results[0] !== undefined) {
                isInGroup();
            } else {
                isNotInGroup();
            }
        }
    });

    function isInGroup() {
        console.log('User is in the "' + spGroupName + '" SharePoint group.');
    }

    function isNotInGroup() {
        console.log('User is NOT in the "' + spGroupName + '" SharePoint group.');
    }
}
