/*
============================================
; Title: object-collections.js
; Author: Diandra McKenzie 
; Date: 11 January 2020
; Description: Demonstrates how to create an object collection and output the contents
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Exercise 5.3"));

// collection of objects
const famousComposers = [
    {
      lastName: 'Beethoven',
      genre: 'Classical',
      rating:8
    },
    {
      lastName: 'Mozart',
      genre: 'Classical',
      rating:10
    },
    {
      lastName: 'Bach',
      genre: 'Classical',
      rating:9
    },
    {
      lastName: 'Haydn',
      genre: 'Classical',
      rating:6
    },
    {
      lastName: 'Schubert',
      genre: 'Classical',
      rating:5
    }
  ];
  
  // Output
  console.log('-- COMPOSERS --')
  
  famousComposers.forEach( (composer) => {
    console.log('Last Name: ' +  composer.lastName + ', '+ 'Genre: ' + composer.genre + ', '+ 'Rating: ' + composer.rating)
  })

  //End Program