//Get all table cells
const spFormCells = document.querySelectorAll('.ms-formtable td');

//Example: Remove cell widths
for (var i = 0; i < spFormCells.length; i++) {
    spFormCells[i].removeAttribute('width');
}
