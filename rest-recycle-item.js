// get fresh token
function getFormDigest(webUrl) {
  return $.ajax({
      url: webUrl + "/_api/contextinfo",
      method: "POST",
      headers: { "Accept": "application/json; odata=verbose" }
  });
}

// recycle sp item
function recycleItem(siteURL, listName, itemID, callback) {
  return getFormDigest(siteURL).then(function (data) {
      return $.ajax({
          url: siteURL + "/_api/web/lists/getbytitle('" + listName + "')/Items('" + itemID + "')/recycle()",
          type: 'POST',
          headers: {
              'accept': 'application/json;odata=verbose',
              'X-RequestDigest': data.d.GetContextWebInformation.FormDigestValue,
              'IF-MATCH': '*',
              'X-HTTP-Method': 'MERGE',
          }
      }).done(function (response) {
          callback();
      }).fail(function (xhr, status, error) {
          alert(xhr.responseText)
      })
  });
}
