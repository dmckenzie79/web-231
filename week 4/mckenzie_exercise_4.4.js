/*
============================================
; Title: predicates.js
; Author: Diandra McKenzie 
; Date: 18 December 2019
; Description: Demonstrates how to declare and and use JavaScript predicates
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 4.4"));

 // new line
console.log("");


// array of string values
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

/*
 * Params: state, value
 * Response: true/false
 * Description: Returns true/false given the comparison
 */

//function
 function getState(state, value) {
  if (state === value)
	return true
 else
	return false
}

// output
console.log("-- ORIGINAL ARRAY --"); // iterate over the array and output the results
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}

// new line
console.log("");

// output
console.log(" -- SORTED ARRAY --"); // sorted array using JavaScript's built-in sort() and forEach() functions
states.sort().forEach(state => console.log(state));


// new line
console.log("");

// output
console.log(" -- SELECTED VALUE --");
console.log(
  states.filter // built-in JavaScript function for returning a subset of records
  (
    function (state) {
      return getState(state, "Iowa") // use the getState function to return a matching state
    }
  )[0] // return the first element in the return array
);

//End Program