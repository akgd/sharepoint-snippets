/* 
 * Use to add IDs to SP form rows and cells.
 * This makes the elements easier to target
 * when scripting or applying styles.
 */

var spFormLabels = document.querySelectorAll('.ms-formlabel');
for (var i = 0; i < spFormLabels.length; i++) {
    var label = spFormLabels[i].textContent;
    label = label.trim();
    label = label.replace(/[^a-zA-Z0-9]/g, '');
    var row = spFormLabels[i].closest('tr');
    row.id = 'row-' + label;
    var dataCell = row.getElementsByClassName('ms-formbody')[0];
    dataCell.id = 'data-' + label;
}
