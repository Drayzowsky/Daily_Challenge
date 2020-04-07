// Daily Challenge


	let input= document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Only Letters... :)");
	document.body.appendChild(input);
	input.addEventListener("keypress", onlyLetter);

	function onlyLetter(e) {
		let key= e.keyCode || e.which;
		if(key< 65 || key>90 && key< 97 || key> 122) {
			e.preventDefault();
		};
	}