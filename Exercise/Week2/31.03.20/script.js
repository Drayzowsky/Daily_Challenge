// Exercise 1:

let user= {
	Username: "John",
	Password: "xxxx",
};
let database= [user];
let newfeed= [
	 { Username: "John01", Timeline: "aa"},
	 { Username: "John02", Timeline: "bb"},
	 { Username: "John03", Timeline: "yy"}
];


// Exercise 2:

let i= 0;
for (i=0; i<15; i++) {
	if (i%2===0) {
		console.log(i + " is even");
	}
	else {
		console.log(i + " is odd");}
}


// Exercise *:

let person= { fname:"John", lname:"Doe", age:"25",
			  friends:["Leah", "Johanna", "Mark"] };
for (x in person) {console.log(x);}

