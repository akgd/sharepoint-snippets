//add IDs to SP form rows and cells
	const spFormLabels = document.querySelectorAll('.ms-formlabel');
	for (var i=0; i < spFormLabels.length; i++) {
	 	let label = spFormLabels[i].textContent;
	 	label = label.trim();
	 	label = label.replace(/[^a-zA-Z0-9]/g, '');
	 	const row = spFormLabels[i].closest('tr');
	 	row.id = 'row-' + label;
	 	const dataCell = row.getElementsByClassName('ms-formbody')[0];
	 	dataCell.id = 'data-' + label;
	}
