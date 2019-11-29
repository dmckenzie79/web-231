/*
Title: McKenzie_Assignment-1.5 Types, Values and Variables
Author: Diandra McKenzie
Date: 2019 November 28
Description: A program that demonstrates the use of JavaScript types, values, 
and variables in an application.
*/

// Start program

//Expected output:

/*
Barbara Kaplan 567 Maple Street 20.4 8/20/2008
Matthew Smith 12 Brooklyn Blvd 35.1 2/26/2016
Kenneth Klein 1384 7th Avenue 15.9 5/09/2018
*/


// Declared variables and assignments
    var firstName1 = "Barbara";
    var lastName1 = "Kaplan";
    var address1 = "567 Maple Street";
    var l = 20.41; //employee pay rate
    var payRate1 = l.toFixed(1); 
    var date1 = new Date(2008, 7, 20); //employee hire date
    var hireDate1 = date1.toLocaleDateString();
    

    var firstName2 = "Matthew";
    var lastName2 = "Smith";
    var address2 = "12 Brooklyn Blvd";
    var m = 35.12; //employee pay rate
    var payRate2 = m.toFixed(1);
    var date2 = new Date(2016, 1, 26); //employee hire date
    var hireDate2 = date2.toLocaleDateString();

    var firstName3 = "Kenneth";
    var lastName3 = "Klein";
    var address3 = "1384 7th Avenue";
    var n = 15.93; //employee pay rate
    var payRate3 = n.toFixed(1);
    var date3 = new Date(2018, 4, 9); //employee hire date
    var hireDate3 = date3.toLocaleDateString();

// Output

    console.log(firstName1, lastName1, address1, payRate1, hireDate1);
    console.log(firstName2, lastName2, address2, payRate2, hireDate2);
    console.log(firstName3, lastName3, address3, payRate3, hireDate3);

// End program