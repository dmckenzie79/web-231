/*
============================================
; Title:  control-statements.js
; Author: Diandra McKenzie 
; Date:   12 December 2019
; Description: Control statement with two errors
;===========================================
*/

/*
  Expected output:

  Diandra McKenzie
  Exercise 3.1
  Today's Date

// output from the match() function
  false
  true
// output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//Start Program

const header = require('./mckenzie-header.js'); // Import statement, Header
//Output for Header
console.log(header.display("Diandra", "McKenzie", "Discussion 3.1"));

// six (6) test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

//functions
function match(arg1, arg2) {
 if (arg1 === arg2)
	return true
 else
	return false
}

function logMismatch(arg1, arg2) {
	console.log(arg1+" and "+ arg2+ " do not match!")
}

function logMatch(arg1, arg2) {
	console.log(arg1+" and "+ arg2+ " do match!");
}


//Output from the match() function
console.log(match("Cat","Dog"));
console.log(match(4, 4));

//Conditional "if...else" statements
if (match(testVar1, testVar2)) {
	logMatch(testVar1, testVar2);
} else {
	logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
	logMatch(testVar3, testVar4);
} else {
	logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
	logMatch(testVar5, testVar6);
} else {
	logMismatch(testVar5, testVar6);
}

//End Program