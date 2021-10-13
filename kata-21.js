let prompt = require("prompt-sync")();

//create an array to keep track of entered numbers
let arr = [];
//create a variable to store random number from 0 - 100
let randNum = Math.floor((Math.random() * 100) + 1);
let numOfTries = 1;
let answer = "";
let alreadyGuessed = false;

do {
  answer = parseInt(prompt("Guess a number: "));
  //print error message if user did not enter a number
  if (typeof(answer) !== 'number') {
    console.log("Not a number! Try again!");
  } else if (answer < randNum) {
    numOfTries = incrementTry(answer);
    alreadyGuessed ? console.log("already Guessed!") : console.log("Too Low!");
  } else if (answer > randNum) {
    numOfTries = incrementTry(answer);
    alreadyGuessed ? console.log("already Guessed!") : console.log("Too High!");    
  } else {
    console.log("You got it! " + "You took " + numOfTries + " attempts!")
  }
} while (answer !== randNum);

function incrementTry(answer) {
  //check array to see if answer has been entered before
  for (const elm of arr) {
    //if answer already exists, increment numOfTries by 0 and return
    if (elm === answer) {
      alreadyGuessed = true;
      return numOfTries += 0;
    }
  }
  //else, this answer hasn't been repeated before; so add to array, increment numOfTries
  arr.push(answer);
  alreadyGuessed = false;
  return numOfTries += 1;
}