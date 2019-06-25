function clearUnresolvedPeople() {

    var peoplePickers = document.querySelectorAll('.sp-peoplepicker-topLevel');

    for (i = 0; i < peoplePickers.length; i++) {

        var picker = peoplePickers[i];
        var pickerInput = picker.querySelector('input[id$="_HiddenInput"]');
        
        if (pickerInput.value) {

            var people = JSON.parse(pickerInput.value);

            for (p = 0; p < people.length; p++) {

                if (people[p].Key === '') {

                    var userEl = picker.querySelector('.sp-peoplepicker-userSpan[sid=""]')
                    userEl.parentNode.removeChild(userEl);
                    people.splice(p, 1);
                    pickerInput.value = JSON.stringify(people);

                }
            }

        }
    }
}

clearUnresolvedPeople();
