//Check item form view
function checkFormView(currentUrl) {
    var newForm = (checkForSubstring(currentUrl, 'newform'));
    var dispForm = (checkForSubstring(currentUrl, 'dispform'));
    var editForm = (checkForSubstring(currentUrl, 'editform'));

    if (newForm) {
        spNewForm();
    } else if (dispForm) {
        spDispForm();
    } else if (editForm) {
        spEditForm();
    } else {
        console.log('Not a valid form URL.')
    }    
}

//Check if string contains substring (not case sensitive)
function checkForSubstring(fullStr, subStr) {
    fullStr = fullStr.toLowerCase();
    subStr = subStr.toLowerCase();
    if (fullStr.indexOf(subStr) !== -1) {
        return true;
    } else {
        return false;
    }
}

//New form
function spNewForm() {
    //Add class to our custom form div
    document.getElementById('root').classList.add('sp-new-form');
    //Move save and cancel buttons to our custom action area (jQuery)
    $('#sp-form-save').append($('.ms-toolbar input[value="Save"]')[0]);
    $('#sp-form-cancel').append($('.ms-toolbar input[value="Cancel"]')[0]);
}

//Disp form
function spDispForm() {
    //Add class to our custom form div
    document.getElementById('root').classList.add('sp-disp-form');
}

//Edit form
function spEditForm() {
    //Add class to our custom form div
    document.getElementById('root').classList.add('sp-edit-form');
    //Move save and cancel buttons to our custom action area (jQuery)
    $('#sp-form-save').append($('.ms-toolbar input[value="Save"]')[0]);
    $('#sp-form-cancel').append($('.ms-toolbar input[value="Cancel"]')[0]);
}
