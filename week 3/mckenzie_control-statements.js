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
  Exercise 2.3
  Today's Date

  Your child can register for Pre-k!
  Your child must be born in 2016 to register for Pre-k!
*/ 


//Start Program

const header = require('./mckenzie-header.js'); // Import statement, Header
//Output
console.log(header.display("Diandra", "McKenzie", "Discussion 3.1"));


//Conditional Statement
var x=2016


//if..else Statements

if(x ==== 2016) {
    console.log("Your child can register for Pre-k!")
}
else if(x > 2016) {
    console.log("Your child must be born in 2016 to register for Pre-k!") 
}
else if(x  == 2015){
    console.log("Your child can register for Kindergarten!")
}
else{
    console.log("Please call the school.")
}
else else if{
    console.log("Call the board of Ed.")
}

//End Program