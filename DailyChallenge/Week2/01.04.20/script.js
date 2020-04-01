// Daily Challenge


	function frame() {

    	let arr= ["Hello", "people", "in", "the", "World"]; // Original Array
    	let stars= "**********"
    	let space= " ";
    	console.log(stars); // display the First line of stars
    	for (let i = 0; i < arr.length; i++) {
    	let dist= 7 -arr[i].length; // Number of space needed between the string and the last star
    	console.log("* " + arr[i] + space.repeat(dist) + "*"); // Display each lines
    	};
    	console.log(stars); // Display the Last line of stars   
	}