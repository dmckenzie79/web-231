/*
============================================
; Title: filtering-reducing-complex-data-structures.js
; Author: Diandra McKenzie 
; Date: 11 January 2020
; Description: Demonstrates how to filter list of collection objects
;===========================================
*/

/*
  FirstName LastName
  Assignment 5.4
  Today's Date
  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert
  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert
*/

//Start Program

// Import statement, Header
const header = require('./mckenzie-header.js'); 
 
//Output
 console.log(header.display("Diandra", "McKenzie", "Assignment 5.4"));


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

// return a new list of objects with only the rating and Composers fields
let ratings = famousComposers.map((composer) => {
    return ('Rating: '+composer.rating+ '\n' +'Composer: '+composer.lastName) ;
})

// return a new list of objects with only the genre and Composers fields
let genres = famousComposers.map((composer) => {
    return ('Genre: '+composer.genre+ '\n' +'Composer: '+composer.lastName) ;
})
  
// Output
  console.log('-- COMPOSER BY RATING --')
 ratings.forEach((rating) => {
 console.log(rating)
 })

 console.log('-- COMPOSER BY GENRE --')
 genres.forEach((genre) => {
 console.log(genre)
 })

//End Program