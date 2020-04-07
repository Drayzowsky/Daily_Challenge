//Exercise


	// Exercise 1: 

	/*function display() {

		let body= document.getElementsByTagName("body");
		let banner= document.createElement("button");
		document.body.appendChild(banner);
		banner.innerHTML= "The sales end in 10min";
		banner.style.background= "green";
		banner.style.width= "100%";
	}

	setTimeout(display, 5000);*/


	//Exercise 2:

	let inter= setInterval(displayBanner, 2000);

	function displayBanner() {

		let time= 11;
		if(time> 0){
			time= time-1;
			let body= document.getElementsByTagName("body");
			let banner= document.createElement("button");
			document.body.appendChild(banner);
			banner.innerHTML= "The sales end in " + time + " sec";
			banner.style.background= "green";
			banner.style.width= "100%";
		} else {
			clearInterval(inter);
		};
	}

