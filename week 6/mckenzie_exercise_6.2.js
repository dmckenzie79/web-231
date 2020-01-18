/*
============================================
; Title: exception-handling.js
; Author: Diandra McKenzie 
; Date: 14 January 2020
; Description: Description: Demonstrates how to create a try/catch/finally block
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date
  Catch clause: Uh, Oh, Error
  Finally clause reached...
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 6.2"));


 try {
    // variable
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
    // if statement
    if (days === days) throw 'Uh, Oh, Error'
  
    // output
    console.log(Funday)
  } catch (err) {
    console.log('Catch clause: ' + err)
  } finally {
    console.log('Finally clause reached...')
  }

//End Program  
