/*
============================================
; Title: keyed collection array.js
; Author: Diandra McKenzie 
; Date: 7 January 2020
; Description: Keyed collection array with at least two (2) errors
;===========================================
*/
 	 
/*
Expected output:
 	 
Diandra McKenzie
Discussion 5.1
Today's Date


Kirk is 43 years old
Diandra is 40 years old
Antonio is 3 years old
Amya is almost 2 years old
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Discussion 5.1"));

// new line
console.log("\n")

//Variables

var family = new Map();
family.set('Kirk', 43);
family.set('Diandra', 40);
family.set('Antonio', 3);
family.set['Amya' 'almost 2'];


//Output

for (var [name, age] of person) //loop to return an array 
{
    console.log(name+' is ' + age + ' years old');
  }

//End Program
