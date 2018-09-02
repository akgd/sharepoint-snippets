function getListItems() {

    var requestURL = "";

    $.ajax({
        url: requestURL,
        type: 'GET',
        headers: {
            'accept': 'application/json;odata=verbose',
            'content-Type': 'application/json;odata=verbose'
        },
        success: function(data) {
            if (data.d.results) {
                items = data.d.results;

                for (var i = 0; i < items.length; i++) {
                    var spID = items[i].Id;

                    if (i === items.length) {
                        // All items processed
                    }
                }
            }
        },
        error: function(xhr) {
            console.log(xhr.status + ': ' + xhr.statusText);
        }
    });

}