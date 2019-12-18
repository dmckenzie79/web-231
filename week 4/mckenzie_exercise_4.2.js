/*
============================================
; Title: arrays-and-operators.js
; Author: Diandra McKenzie 
; Date: 18 December 2019
; Description: Demonstrates how to define arrays
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 4.2"));

//Variable

var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

/*
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */


//Function
function getFruit(arr){
	for (var k = 0; k < arr.length; k++){
	    console.log(arr[k]);
	}
}


//Output
getFruit(fruits);

//End Program