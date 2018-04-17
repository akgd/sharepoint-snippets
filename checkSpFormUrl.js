function checkFormView(currentUrl) {

    var newForm = (checkForSubstring(currentUrl, 'newform'));
    var dispForm = (checkForSubstring(currentUrl, 'dispform'));
    var editForm = (checkForSubstring(currentUrl, 'editform'));

    if (newForm) {
        //do stuff if new form
    } else if (dispForm) {
        //do stuff if disp form
    } else if (editForm) {
        //do stuff if edit form
    } else {
        console.log('Not a valid form URL.')
    }
    
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