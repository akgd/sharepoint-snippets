function limitMultiChoice(internalFieldName, isLimited, limitedNum) {
    var multiChoiceInputs = document.querySelectorAll('table[id^="' + internalFieldName + '_"] input'); //get all multi-choice inputs
    for (var i = 0; i < multiChoiceInputs.length; i++) {
        onChoiceClick(multiChoiceInputs, multiChoiceInputs[i], isLimited, limitedNum); //run function on each input
    }
}

function onChoiceClick(allInputs, inputEl, isLimited, limitedNum) {
    inputEl.addEventListener('click', function() {
        event.target.classList.toggle('selected'); //toggle selected class when clicked
        var selectedCount = 0; //counter for inputs where 'selected' class exists
        for (var i = 0; i < allInputs.length; i++) { //check each input for 'selected' class
            if (allInputs[i].classList.contains('selected')) {
                selectedCount++;
            }
        }
        if (isLimited) {
            if (selectedCount > limitedNum) { //if too many selections, run function
                tooManySelections(limitedNum, selectedCount);
            }
        }
    })
}

function tooManySelections(max, selected) {
    alert('You have selected ' + selected + ' options. Please limit your choices to ' + max + '.'); //example behavior
}

limitMultiChoice('MultiTest', true, 6); //example call
