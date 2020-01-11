/*
============================================
; Title: es5-built-in-functions.js
; Author: Diandra McKenzie 
; Date: 10 January 2020
; Description: Demonstrates how to loop through an array using the forEach and arrow functions
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 5.2"));

//Array of fruits
const fruits = ['Oysters','Shrimp','Steak','Tacos','Sushi'];


//Output
fruits.forEach((fruits) => {
console.log(fruits)
});

//End Program