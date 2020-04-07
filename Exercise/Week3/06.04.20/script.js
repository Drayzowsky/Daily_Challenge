

function insert_Row() {
	let table= document.body.getElementsByTagName("table");
	let row= document.createElement("tr");
	table.lastElementChild.appendChild(row);
}