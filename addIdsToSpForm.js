//Add ids to ms- form rows and cells
function addIdsToSpForm() {

    var fieldLabels = document.querySelectorAll('.ms-formlabel');

    Array.prototype.forEach.call(fieldLabels, function(el, index) {
        var inner = el.innerHTML;
        inner = stripHTMLTags(inner);
        inner = inner.replace(/[^\w\s]/gi, '');
        inner = inner.trim();
        var row = el.closest('tr');
        var rowId = 'row-' + inner;
        row.id = rowId;
        var fieldCell = document.querySelector('#' + rowId + ' .ms-formbody');
        fieldCell.id = 'field-' + inner;

    });

}