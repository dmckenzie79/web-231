/*
============================================
; Title: filtering.js
; Author: Diandra McKenzie 
; Date: 18 December 2019
; Description: Demonstrates how to filter values in an array
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 4.3"));

// array of string values
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

//function
function getValue(arr, value) {
    for (var k = 0; k < arr.length; k++) {
      if (arr[k] === value) {
        console.log(arr[k]);
      }
    }
  }

// output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var j = 0; j < vehicles.length; j++) {
  console.log(vehicles[j]);
}

// new line
console.log("");

// output
console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// new line
console.log("");

// output
console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Bus");


//End Program