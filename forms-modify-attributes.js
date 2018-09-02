// Get all table cells
var spFormCells = document.querySelectorAll('.ms-formtable td');

// For each one remove the width
for (var i = 0; i < spFormCells.length; i++) {
    spFormCells[i].removeAttribute('width');
}
