// jQuery required
function isSpGroupMember(spGroupName, result) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('" + spGroupName + "')/Users?$filter=Id eq " + _spPageContextInfo.userId,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            if (data.d.results[0] !== undefined) {
                result(true);
            } else {
                result(false);
            }
        }
    });
}
