// Add a new user to the table
function addToTable() {
	// Get the form input values
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var country = document.getElementById('country').value;
	var hasProof = document.getElementById('has-proof').checked;
	var facebookLink = document.getElementById('facebook-link').value;

	// Check if the user already exists in the table
	var userExists = false;
	var rows = document.getElementById('user-table').rows;
	for (var i = 1; i < rows.length; i++) {
		if (rows[i].cells[1].innerHTML == email) {
			userExists = true;
			break;
		}
	}

	// If the user does not already exist, add them to the table
	if (!userExists) {
		// Create a new row in the table
		var table = document.getElementById('user-table');
		var row = table.insertRow(-1);

		// Add the user information to the cells of the new row
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		cell1.innerHTML = name;
		cell2.innerHTML = email;
		cell3.innerHTML = country;
		cell4.innerHTML = hasProof;
		cell5.innerHTML = facebookLink;
	}
}

// Download the table data as an Excel file
function downloadExcel() {
	// Convert the table data to an array of objects
	var data = [];
	var rows = document.getElementById('user-table').rows;
	for (var i = 1; i < rows.length; i++) {
		var rowData = {};
		rowData.name = rows[i].cells[0].innerHTML;
		rowData.email = rows[i].cells[1].innerHTML;
		rowData.country = rows[i].cells[2].innerHTML;
		rowData.hasProof = rows[i].cells[3].innerHTML;
		rowData.facebookLink = rows[i].cells[4].innerHTML;
		data.push(rowData);
	}

	// Use Papa Parse to convert the data to a CSV string
	var csv = Papa.unparse(data);

	// Create a hidden link element and click it to trigger the download
	var link = document.createElement('a');
	link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
	link.download = 'users.csv';
	link.style.display = 'none';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

// Read an Excel file and display the data in the table
function readExcel(file) {
	// Use Papa Parse to parse the Excel file
	Papa.parse(file, {
		header: true,
		complete: function (results) {
			// Loop through the data and add each user to the table
			var data = results.data;
			for (var i = 0; i < data.length; i++) {
				var name = data[i].name;
				var email = data[i].email;
				var country = data[i].country;
				var hasProof = data[i].hasProof;
				var facebookLink = data[i].facebookLink;
				addUser(name, email, country, hasProof, facebookLink);
			}
		},
	});
}

// Add a user to the table
function addUser(name, email, country, hasProof, facebookLink) {
	// Check if the user already exists in the table
	var userExists = false;
	var rows = document.getElementById('user-table').rows;
	for (var i = 1; i < rows.length; i++) {
		if (rows[i].cells[1].innerHTML == email) {
			userExists = true;
			break;
		}
	}

	// If the user does not already exist, add them to the table
	if (!userExists) {
		// Create a new row in the table
		var table = document.getElementById('user-table');
		var row = table.insertRow(-1);

		// Add the user information to the cells of the new row
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		cell1.innerHTML = name;
		cell2.innerHTML = email;
		cell3.innerHTML = country;
		cell4.innerHTML = hasProof;
		cell5.innerHTML = facebookLink;
	}
}

// 925RF0L5 MTN-MobileWIFI-E5573
