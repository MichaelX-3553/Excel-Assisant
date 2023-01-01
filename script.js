// Add a new user to the table
function addToTable() {
	// Get the form input values
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let country = document.getElementById('country').value;
	let hasProof = document.getElementById('has-proof').checked;
	let facebookLink = document.getElementById('facebook-link').value;

	// Check if the user already exists in the table
	let userExists = false;
	let rows = document.getElementById('user-table').rows;
	for (let i = 1; i < rows.length; i++) {
		if (rows[i].cells[1].innerHTML == email) {
			userExists = true;
			break;
		}
	}

	// If the user does not already exist, add them to the table
	if (!userExists) {
		// Create a new row in the table
		let table = document.getElementById('user-table');
		let row = table.insertRow(-1);

		// Add the user information to the cells of the new row
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		let cell6 = row.insertCell(5);
		cell1.innerHTML = name;
		cell2.innerHTML = email;
		cell3.innerHTML = country;
		cell4.innerHTML = hasProof;
		cell5.innerHTML = facebookLink;
		cell6.innerHTML = deleteButton();

		cell6.childNodes[0].addEventListener('click', () => {
			cell6.childNodes[0].parentElement.parentElement.remove();
			console.log('hello parent');
		});
	}
}

// Download the table data as an Excel file
function downloadExcel() {
	// Convert the table data to an array of objects
	let data = [];
	let rows = document.getElementById('user-table').rows;
	for (let i = 1; i < rows.length; i++) {
		let rowData = {};
		rowData.name = rows[i].cells[0].innerHTML;
		rowData.email = rows[i].cells[1].innerHTML;
		rowData.country = rows[i].cells[2].innerHTML;
		rowData.hasProof = rows[i].cells[3].innerHTML;
		rowData.facebookLink = rows[i].cells[4].innerHTML;
		data.push(rowData);
	}

	// Use Papa Parse to convert the data to a CSV string
	let csv = Papa.unparse(data);

	// Create a hidden link element and click it to trigger the download
	let link = document.createElement('a');
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
			let data = results.data;
			for (let i = 0; i < data.length; i++) {
				let name = data[i].name;
				let email = data[i].email;
				let country = data[i].country;
				let hasProof = data[i].hasProof;
				let facebookLink = data[i].facebookLink;
				addUser(name, email, country, hasProof, facebookLink);
			}
		},
	});
}

// Add a user to the table
function addUser(name, email, country, hasProof, facebookLink) {
	// Check if the user already exists in the table
	let userExists = false;
	let rows = document.getElementById('user-table').rows;
	for (let i = 1; i < rows.length; i++) {
		if (rows[i].cells[1].innerHTML == email) {
			userExists = true;
			break;
		}
	}

	// If the user does not already exist, add them to the table
	if (!userExists) {
		// Create a new row in the table
		let table = document.getElementById('user-table');
		let row = table.insertRow(-1);

		// Add the user information to the cells of the new row
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		let cell6 = row.insertCell(5);
		cell1.innerHTML = name;
		cell2.innerHTML = email;
		cell3.innerHTML = country;
		cell4.innerHTML = hasProof;
		cell5.innerHTML = facebookLink;
		cell6.innerHTML = deleteButton();

		cell6.childNodes[0].addEventListener('click', () => {
			cell6.childNodes[0].parentElement.parentElement.remove();
			console.log('hello parent');
		});
	}
}

function deleteButton() {
	let button = document.createElement('button');
	button.classList.add('delete-btn');
	button.textContent = 'Delete';

	return button.outerHTML;
}
