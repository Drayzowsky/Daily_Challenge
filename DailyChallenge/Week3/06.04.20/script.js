// Daily Challenge

	
	let box= document.createElement("div");
	document.body.appendChild(box);
	box.style.width= "250px";
	box.style.height= "150px";
	box.style.background= "orange";
	box.addEventListener("click", clickMe);
	box.addEventListener("mouseover", over);
	box.addEventListener("mouseout", out);

	function clickMe() {
		box.style.boxShadow= "30px 30px 30px red";

	};

	function over() {
		box.style.borderRadius= "100px";
		box.style.width= "400px";
		box.style.height= "300px";
	};

	function out() {
		box.style.background= "purple";
		box.style.marginLeft= "200px";
	};

	
