//Exercise 2:


	let button= document.getElementById("jsstyle");
	button.addEventListener("click", RespondClick);
	button.addEventListener("mouseover", RespondMouseOver);

	function RespondClick(e) {
		console.log("e.target", e.target);
		e.target.style.color= "red";

	};
	function RespondMouseOver(e) {
		e.target.style.background= "green";
	}