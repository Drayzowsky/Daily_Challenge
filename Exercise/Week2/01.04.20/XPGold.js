let myNumber;
let answer;
let computerNumber
function playTheGame() {
        answer= confirm("Do you want to play?");
        if (answer=== true) { 
            myNumber= prompt("Choose a number between 0 and 10");
            if (isNaN(myNumber)) {
                alert("Sorry not a number, Bye");
                return
            } else if (myNumber<0 || myNumber>10) {
                alert("Sorry it's not a good number");
                return
            } else {  
                computerNumber=Math.round(Math.random() * 10);
              }

        } else { 
            alert("No problem, GoodBye")
          }
        function test(myNumber, computerNumber) {
           if (myNumber=== computerNumber) {
               alert("You won!!!")
           } else if (myNumber> computerNumber) {
                alert("Your number is bigger, try again..");
                myNumber= prompt("Choose a new number between 0 and 10");
             } else if (myNumber< computerNumber) {
                alert("Your number is lower, try again");
                myNumber= prompt("Choose a new number between 0 and 10");
               } else { alert("You guessed 3 times, you can't try again. The computer's number was " + computerNumber)       }
                    
        }
test();

};

playTheGame();