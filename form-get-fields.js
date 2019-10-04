  function getFields(isEditable) {
        var els = document.querySelectorAll('.get-field')
        for (i = 0; i < els.length; i++) {
            var elId = els[i].id;
            var internalFieldName = elId.replace('internal-', '');

            if (isEditable) {
                //Find the actual SP form data field
                var spFieldId = '[id^="' + internalFieldName + '_"]';
                var spFieldEl = $(spFieldId);
                $(els[i]).append(spFieldEl)
                //(els[i]).appendChild(spFieldEl);
            } else {
                var spFieldLabel = '[name="SPBookmark_' + internalFieldName + '"]';
                var spFieldRow = $(spFieldLabel).closest('tr');
                var spFieldData = $(spFieldRow).find('.ms-formbody');
                $('#' + elId).append($(spFieldData).contents());
            }
        }
    }
