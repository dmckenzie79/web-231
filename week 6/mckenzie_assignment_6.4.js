/*
============================================
; Title:  nested-object-literals.js
; Author: Diandra McKenzie
; Date:   16 January 2020
; Description: Demonstrates how to create and display nested objects
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Assignment 6.4"));


// object with nested object
const ticket = {
    id: 105,
    name: "Bob Jones",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority: "high",
  
    // nested object
    person: {
      id: 100,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "(Programmer I)",
    }
  }
  
  // output
  console.log("Ticket "+ ticket.id+ " was created on "+ ticket.dateCreated +" and assigned to employee " + ticket.name + " "+ ticket.person.jobTitle + ".")


  //End Program