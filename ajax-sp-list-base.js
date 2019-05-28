function getItems() {
    var requestURL = "https://SITE/sites/SITE/_api/web/lists/getbytitle('LIST TITLE')/Items?$top=5000&$select=*,Editor/Title&$expand=Editor&$filter=Title eq 'SOMETHING'";
    $.ajax({
        url: requestURL,
        type: 'GET',
        headers: {
            'accept': 'application/json;odata=verbose'
        },
        success: function (data) {
            if (data.d.results) {
                handleResults(data.d.results);
            }
        },
        error: function (xhr) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
    });
}

function handleResults(data) {
    var projects = [];

    for (i = 0; i < data.length; i++) {
        var project = {};

        project.title = data[i].Title;
        project.modifiedBy = data[i].Editor.Title;

        projects.push(project);
    }
}