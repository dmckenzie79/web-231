/*
============================================
; Title:  header-test.js
; Author: Professor Krasso 
; Date:   4 December 2019
; Modified By: Diandra McKenzie
; Description: Displays a formatted header
;===========================================
*/

/*
Expected Output
Diandra McKenzie 
Week 2
Date: <Today's date>
*/

//Start Program

const header = require('./mckenzie-header.js'); // Import statement

//Output

console.log(header.display("Diandra", "McKenzie", "Week 2"));

//End Program