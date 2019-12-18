/*
============================================
; Title: array.js
; Author: Diandra McKenzie 
; Date: 17 December 2019
; Description: Array with at least two (2) errors
;===========================================
*/
 	 
/*
Expected output:
 	 
Diandra McKenzie
Discussion 4.1
Today's Date


Kirk McKenzie would really love a BMW i8 for Christmas.
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Discussion 4.1"));

// new line
console.log("\n")

//Variables

var person = [Kirk, McKenzie, 42];
var cars = ["Lamborghini Murcielago", "Cadillac Escalade", "BMW i8"];

//Output
console.log{person[1]+ " "+person[2]+" would really love a "+cars[2]+" for Christmas."}


//End Program