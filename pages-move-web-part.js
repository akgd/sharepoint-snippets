// Remember to add IE polyfills

// Use to move web parts on a classic page
function moveWebPart(wpTitle, elementId, hideTitleBool) {
    // Get all web parts on the page
    var webParts = document.querySelectorAll('.ms-webpart-titleText');

    // Get the target element
    var targetEl = document.querySelector('#' + elementId);
    for (var i = 0; i < webParts.length; i++) { 
        if (webParts[i].textContent == wpTitle) {
            var getWp = webParts[i].closest('[id^="MSOZoneCell_"]');
            var getWpTitleBar = webParts[i].closest('.ms-webpart-chrome-title');

            // Check if we're in edit mode
            var isInEditMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
            // Hide web part title if not in edit mode 
            if ((isInEditMode != 1) && hideTitleBool) {
                getWpTitleBar.style.display = 'none';
            }
            // Move the web part to the target element
            targetEl.appendChild(getWp);
            break;
        }
    }
}

// Example usage
document.addEventListener('DOMContentLoaded', function() {
    moveWebPart('Content Editor', 'data', true);
    moveWebPart('Special Documents', 'data', false);
});
