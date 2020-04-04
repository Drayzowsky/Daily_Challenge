// Daily Challenge 



	function song (){
		let x_bottle= prompt ("Choose a number of bottles?");
		let bottles_down= 1;
		let phrase1= " bottle of beer on the wall";
		let phrase2= " bottles of beer";
		let phrase3= " down, pass it around";
		let phrase4= " down, pass them around";

		for (i=1; i< x_bottle; i++) {
			bottles_down=i;
			console.log(x_bottle + phrase1);
			console.log(x_bottle + phrase2);
			if (i===1) {
				console.log("Take " + bottles_down + phrase3);	
			} else {
				console.log("Take " + bottles_down + phrase4);
			}
			x_bottle= x_bottle-i;
			console.log(x_bottle + phrase1);
		};

	};
	song();
	
	