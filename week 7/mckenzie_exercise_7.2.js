/*
============================================
; Title:  constructor-functions.js
; Author: Diandra McKenzie
; Date:   20 January 2020
; Description: Demonstrates how to work with constructor functions
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//Start Program

//Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
console.log(header.display("Diandra", "McKenzie", "Exercise 7.2"))

/*
* Params: id, firstName, lastName, title
* Response: void
* Description: sets the id, firstName, lastName and title of an object
*/

function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//Create 5 new objects
  const employee = [
    new Employee('102', 'Thomas', 'Edison', 'Software Engineer'),
    new Employee('541', 'Benjamin', 'Franklin', 'Programmer'),
    new Employee('613', 'Nikola', 'Tesla', 'Project Manager'),
    new Employee('472', 'Charles', 'Babbage', 'Product Manager'),
    new Employee('235', 'Alexander', 'Bell', 'Business Analyst')
  ];
  
//Output
  
  let index = 1
  for (let x = 0; x < employee.length; x++) {
    console.log(index + ' ' + employee[x].firstName + ' '+employee[x].lastName + ' '+employee[x].title)
    index++
  }

//End Program