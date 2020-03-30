// Exercise XP Gold


	// Exercise 1:

	let x= prompt("Choose a number");
	if (x%2===0){
		alert(x+"is an even number");
	} else {
		alert(x+"is not an even number");
	}


	// Exercise 2:

	let x= 24;
	let y= 15;
	if (x>y){
		console.log(x);
	} else {
		console.log(y);
	}


	// Exercise 3:

	let language= prompt("Which language do you speak?");
	let LANGUAGE= language.toUpperCase();
	switch(LANGUAGE){
		case "FRENCH":
			alert("BONJOUR");
		break;
		case "ENGLISH":
			alert("HELLO");
		break;
		case "HEBREW":
			alert("SHALOM");
		break;
		default:
			alert(":)");
	}


	// Exercise 4:

	let grade= prompt("What is your grade?");
	if (grade>90){
		console.log("A");
	} else if (80<grade && grade<90){
		console.log("B");
	} else if (70<grade && grade<80){
		console.log("C");
	} else {
		console.log("D");
	}