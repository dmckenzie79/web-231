/*
============================================
; Title:  control-statements.js
; Author: Diandra McKenzie 
; Date:   13 December 2019
; Description: Control statement with two errors
;===========================================
*/

/*
  Expected Output
  Diandra McKenzie
  Assignment 3.4
  Today's Date
  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

//Start Program

const header = require('./mckenzie-header.js'); // Import statement, Header
//Output for Header
console.log(header.display("Diandra", "McKenzie", "Exercise 3.4"));

console.log("-- DO THE NUMBERS MATCH GAME --");

// variable

var h = 6;


/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

//functions

function match(arg1, arg2) {
 if (arg1 === arg2)
	return true
 else
	return false
}

function logMatch(arg1, arg2) {
	console.log(arg1+" does match "+arg2+"!");
}

function logMismatch(arg1, arg2) {
	console.log(arg1+" does not match "+arg2+"!")
}

// for loop
for (let x = 0; x < 8; x++){  
if (match(h, x)) {
	logMatch(h, x);
} else{
	logMismatch(h, randomNumber(x));
}
}
//End Program