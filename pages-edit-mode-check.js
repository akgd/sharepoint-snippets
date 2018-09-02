// Check to see if classic page is in edit mode
var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
if (inDesignMode == '1') {
    // Page is being edited
} else {
   // Page is not being edited
}
