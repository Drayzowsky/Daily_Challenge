// Exercise Class 


	// Exercise 1:

	let driver= prompt ("How old are you?")
	if (driver<18) {
		alert ("Sorry, you are too young to drive this car. Powering off")
		} 
	else if (driver==18) {
		alert ("Congratulations on your first year of driving. Enjoy the ride!")
		} 
	else {
		alert ("Powering On. Enjoy the ride!")
		}


	// Exercise 2:

	var a= 2+2;

	switch (a) {
		case 3: 
			alert("Too small")
			break;
		case 4: 
			alert("Exactly") // Correct answer
			break;
		case 5: 
			alert("Too large")
			break;
		default:
			alert("I don't know such values")
	}


	// Exercise 3:

	var a= 2+2

	switch (a) {
		case 4:
			alert("Right"); // Correct answer
			break;
		case 3:
		case 5:
			alert("Wrong!");
			alert("Why don't you take a math class?");
			break;
		default:
			alert("The result is strange. Really.");
	}		

