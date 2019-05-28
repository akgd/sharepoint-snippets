// Check to see if classic page is in edit mode
var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
if (inDesignMode == '1') {
    // Page is being edited
} else {
    // Page is not being edited
}

// Example of use case
var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
var spRibbon = document.getElementById('s4-ribbonrow');
var spLeftNav = document.getElementById('sideNavBox');
var spTitleRow = document.getElementById('s4-titlerow');
if (inDesignMode == '1') {
    // Page is being edited
    spLeftNav.style.display = 'none';
} else {
    // Page is not being edited
    spRibbon.style.display = 'none';
    spLeftNav.style.display = 'none';
    spTitleRow.style.display = 'none';
}