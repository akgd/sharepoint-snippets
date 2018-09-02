function limitMultiChoice(internalFieldName, isLimited, limitedNum) {
    // Get all multi-choice inputs
    var multiChoiceInputs = document.querySelectorAll('table[id^="' + internalFieldName + '_"] input'); 
    for (var i = 0; i < multiChoiceInputs.length; i++) {
        onChoiceClick(multiChoiceInputs, multiChoiceInputs[i], isLimited, limitedNum);
    }
}

function onChoiceClick(allInputs, inputEl, isLimited, limitedNum) {
    inputEl.addEventListener('click', function() {
        // Toggle selected class on click
        event.target.classList.toggle('selected'); 
        var selectedCount = 0; 
        for (var i = 0; i < allInputs.length; i++) {
            if (allInputs[i].classList.contains('selected')) {
                selectedCount++;
            }
        }
        if (isLimited) {
            // If selections exceed our max
            if (selectedCount > limitedNum) {
                tooManySelections(limitedNum, selectedCount);
            }
        }
    })
}

function tooManySelections(max, selected) {
     // Example
    alert('You have selected ' + selected + ' options. Please limit your choices to ' + max + '.'); 
}

// Example
limitMultiChoice('MultiTest', true, 6);
