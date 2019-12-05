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

  Diandra McKenzie
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!
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
console.log(header.display("Diandra", "McKenzie", "Exercise 2.3"));
//Output
console.log('Hello', myName()+"!")

//End Program