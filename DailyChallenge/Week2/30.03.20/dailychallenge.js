// Daily Challenge

	
let str= "The quarantine is not too bad";
let str1= str.indexOf("not");
let str2= str.indexOf("bad");
if (str1<str2) {
	console.log(str.slice(0,str1)+"good");
} else {
	console.log(str);
}
