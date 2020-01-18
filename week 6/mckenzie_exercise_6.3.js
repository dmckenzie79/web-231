/*
============================================
; Title:  object-literal.js
; Author: Diandra McKenzie
; Date:   16 January 2020
; Description: Demonstrates how to create an object and output the properties
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 678201, name: Data Sync Support, requester: Mary Jo Butler}
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 6.3"));


// object with nested object
const customer = {
    id: 678201,
    name: "Data Sync Support",
    requester: "Mary Jo Butler"
  }
  
  // output
  console.log("{id: "+customer.id +","+" name: "+ customer.name +","+" requestor: "+ customer.requester+"}")
  
//End Program