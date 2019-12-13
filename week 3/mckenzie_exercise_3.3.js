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
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed.
*/


//Start Program

const header = require('./mckenzie-header.js'); // Import statement, Header
//Output for Header
console.log(header.display("Diandra", "McKenzie", "Exercise 3.3"));


var eventKeyCode = "13";

	switch(eventKeyCode){
case"13":
	console.log('The enter key was pressed.');
	break;
case"16":
	console.log('The shift key was pressed.');
	break;
case"32":
	console.log('The spacebar key was pressed.');
	break;
case"8":
	console.log('The backspace / delete key was pressed.');
    break;
 default:
    console.log('Unrecognized key.')
}

//End Program