// Example of field array:
// internalName - internal name of the SP field
// displayName - name you want to appear
// helpText - field help description (if any)
// specialClasses - useful for scripting conditions and adding styles

var focusFields = [{
        internalName: 'Title',
        displayName: 'Project Title',
        helpText: '',
        specialClasses: ''
    },
    {
        internalName: 'ProjectLead',
        displayName: 'Project Lead',
        helpText: '',
        specialClasses: ''
    },
    {
        internalName: 'ProjectStatus',
        displayName: 'What is the current status?',
        helpText: '',
        specialClasses: ''
    },
];

// To generate a form section from an array
// Handles fields in classic edit and display forms
function generateFormSection(arr, targetElId, editable) {

    for (i = 0; i < arr.length; i++) {

        var cleanName = arr[i].internalName;
        var specialClasses = arr[i].specialClasses;
        var dataField = '#data-' + cleanName;
        var newRow = '#field-' + cleanName;

        var newEl = '<div id="field-' + cleanName + '" class="field-row ' + specialClasses + '"><div class="field-title">' + arr[i].displayName + '</div><div id="field-data-' + cleanName + '" class="field-data"></div><div class="field-help">' + arr[i].helpText + '</div></div>';

        //Insert new element into target div
        document.querySelector('#' + targetElId).insertAdjacentHTML('beforeend', newEl);
        
        if (editable) {
            //Find the actual SP form data field
            var spFieldId = '[id^="' + arr[i].internalName + '_"]';
            var spFieldEl = document.querySelector(spFieldId);
            document.querySelector(newRow + ' .field-data').appendChild(spFieldEl);
        } else {
            var spFieldLabel = '[name="SPBookmark_' + arr[i].internalName + '"]';
            var spFieldRow = $(spFieldLabel).closest('tr');
            var rowClass = 'row-' + arr[i].internalName;
            $(spFieldRow).addClass(rowClass);
            var target = '.' + rowClass + ' .ms-formbody';
            $(newRow + ' .field-data').append($(target));
        }     
    }
}

