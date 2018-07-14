//remember to add IE polyfills

function moveWebPart(wpTitle, elementId, hideTitleBool) {
    var webParts = document.querySelectorAll('.ms-webpart-titleText'); //get all web parts on page
    var targetEl = document.querySelector('#' + elementId); //get the element we want to move a part to
    for (var i = 0; i < webParts.length; i++) { //for each web part on the page...
        if (webParts[i].textContent == wpTitle) { //if this is the wp title we are looking for...
            var getWp = webParts[i].closest('[id^="MSOZoneCell_"]'); //find the parent
            var getWpTitleBar = webParts[i].closest('.ms-webpart-chrome-title');
            var isInEditMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value; //check if we are in edit mode
            if ((isInEditMode != 1) && hideTitleBool) { //if not in edit mode and title should be hidden
                getWpTitleBar.style.display = 'none';
            }
            targetEl.appendChild(getWp); //move web part to element
            break;
        }
    }
}

//example usage
document.addEventListener('DOMContentLoaded', function() {
    moveWebPart('Content Editor', 'data', true);
    moveWebPart('Special Documents', 'data', false);
});
