    // handle custom submit buttons
    $('.sp-custom-save').click(function () {
        var button = $(this);
        // check if this is a double click
        var disabledStatus = button.attr('disabled');
        if (disabledStatus != 'disabled') {
            // run submit process
            customSubmit();
        }
        // disable el to prevent double click
        button.attr('disabled', 'disabled');
        // reactivate in case submission goes wrong
        setTimeout(function () {
            button.removeAttr('disabled');
        }, 1500);
    });

    function customSubmit() {
        // use jQuery .first because there are multiple SP save buttons
        $('.ms-toolbar input[value="Save"]').first().click();
    }
