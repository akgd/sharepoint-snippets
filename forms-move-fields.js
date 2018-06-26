/* Example of field array:
 * fieldName - name of the field as seen in the list settings
 * displayName - name you want to appear
 * helpText - field help description (if any)
 */
const focusFields = [{
        fieldInternalName: 'Primary Focus',
        displayName: 'What is the project\'s primary focus?',
        type: 'choice',
        helpText: ''
    },
    {
        fieldInternalName: 'Primary research, evaluation, or data collection and reporting approaches and methods',
        displayName: 'Which specific methods does the project use? (Check all that apply)',
        type: 'multi-choice',
        helpText: ''
    },
    {
        fieldInternalName: 'Specific knowledge translation, dissemination, and utilization methods',
        displayName: 'Which specific methods does the project use? (Check all that apply)',
        type: 'multi-choice',
        helpText: ''
    },
    {
        fieldInternalName: 'Promoting behavior change methods',
        displayName: 'Which specific methods does the project use? (Check all that apply)',
        type: 'multi-choice',
        helpText: ''
    },
    {
        fieldInternalName: 'Specific systems change methods',
        displayName: 'Which specific methods does the project use? (Check all that apply)',
        type: 'multi-choice',
        helpText: ''
    },
];

//use to generate a form section from an array
function generateFormSection(arr, targetElId) {

    for (i = 0; i < arr.length; i++) {

        const cleanName = arr[i].fieldInternalName;
        const dataField = '#data-' + cleanName;
        const newRow = '#field-' + cleanName;

        const newEl = `
            <div id="field-${cleanName}" class="field-row">
                <div class="field-title">${arr[i].displayName}</div>
                <div id="field-data-${cleanName}" class="field-data"></div>
                <div class="field-help">${arr[i].helpText}</div>
            </div>
            `;
            
        //Insert new element into target div
       	document.querySelector('#' + targetElId).insertAdjacentHTML('beforeend', newEl);
       		
       	//Find the SP form field
       	const spFieldId = '[id^="' + arr[i].fieldInternalName + '_"]';
	    const spFieldEl = document.querySelector(spFieldId);
        
        //Move field to new element
	document.querySelector(newRow + ' .field-data').appendChild(spFieldEl);

    }
}
