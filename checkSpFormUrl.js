//Get the current URL
var currentUrl = window.location.href;

//Check URL for the sp form string
var newForm = (checkForSubstring(currentUrl, 'newform'));
var dispForm = (checkForSubstring(currentUrl, 'dispform'));
var editForm = (checkForSubstring(currentUrl, 'editform'));

if (newForm === true) {
    //do stuff if new form
} else if (dispForm === true) {
    //do stuff if disp form
} else if (editForm === true) {
    //do stuff if edit form
}

//String contains (not case sensitive)
function checkForSubstring(fullStr, subStr) {
    fullStr = fullStr.toLowerCase();
    subStr = subStr.toLowerCase();
    if (fullStr.indexOf(subStr) !== -1) {
        return true;
    } else {
        return false;
    }
}