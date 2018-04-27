    //remove inline widths from SP table cells
    const spFormCells = document.querySelectorAll('.ms-formtable td');
    for (var i = 0; i < spFormCells.length; i++) {
        spFormCells[i].removeAttribute('width');
    }
