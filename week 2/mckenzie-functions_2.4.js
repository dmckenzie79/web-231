/*
============================================
; Title:  function-properties.js
; Author: Diandra McKenzie 
; Date:   7 December 2019
; Description: Demonstrates how to define and call function properties
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is Diandra McKenzie!

  Today's date is 12/7/2019 and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <40 - parsed int value> years old and my savings account goal is <551000.75 - parsed float value> dollars.

*/ 

//Start Program

const header = require('./mckenzie-header.js'); // Import statement, Header

/*
 * Params: firstName, lastName
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

function fullName(firstName, lastName) {
  return firstName+" "+lastName;
}

/*
 * Params: year, month, day
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

 function dateWriter(year,month,day){
   return new Date();
 }

  /*
 * Params: number, numOfFixedPositions
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

function formatNumber(number,numOfFixedPositions) {
    return number.toFixed(numOfFixedPositions);
}

/*
 * Params: age
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

function convertToInt(age) {
  const parsed = parseInt(age);
  return parsed;
}

/*
 * Params: savings
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

function convertToFloat(savings) {
  const parsed = parseFloat(savings);
  return parsed;
}


//Output
console.log(header.display("Diandra", "McKenzie", "Exercise 2.4"));
// new line
console.log('\n')
//Output
console.log("Hello my name is"+" "+fullName("Diandra","McKenzie")+"!");
// new line
console.log('\n')
//Output
console.log("Today's date is"+" "+dateWriter(2019, 11, 7).toLocaleDateString()+" "+"and the current temperature is"+" "+formatNumber(33.57,1)+" "+"degrees.");
// new line
console.log('\n')
//Output
console.log("I am"+" "+convertToInt("40")+" "+"years old and my savings account goal is"+" "+convertToFloat("551000.75")+" "+"dollars.");

//End Program