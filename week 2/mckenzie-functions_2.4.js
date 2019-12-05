/*
============================================
; Title:  function-properties.js
; Author: Diandra McKenzie 
; Date:   4 December 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is Diandra McKenzie!

  Today's date is 12/4/2019 and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <40 - parsed int value> years old and my savings account goal is <500,000 - parsed float value> dollars.

*/ 

//Start Program

const header = require('./mckenzie-header.js'); // Import statement

// function property definitions
myName.diandra = "Diandra McKenzie"

/*
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName()   {
    return myName.diandra
}
    
//Output
console.log(header.display("Diandra", "McKenzie", "Exercise 2.4"));
// new line
console.log('\n')
//Output
console.log('Hello my name is', myName()+"!")

//End Program