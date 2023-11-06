//I forgot how to start the heading of javascript page. 

//build functionality of a simple app that asks user for numbers
//then, calculates some statistics according to the user's input

// BUILD A FOOTBALL STATS APP 

//build a function for yards gained
//build a function for completed passes
//build a function for 3rd down conversions

//create an object to hold the properties of the player performance.
const qbStats= [ 
{name:`Johnson`, completePass: 24, thirdDown: 9},
{name: `Smith`, completePass: 19, thirdDown: 4},
{name:`Todd`, completePass: 17, thirdDown: 2},
{name:`Martinez`, completePass: 12, thirdDown: 6},
]

//use .filter to bring back everyone that meets the conditions set
//this test should bring back only Smith and Johnson
console.log(qbStats.filter(qbStats => qbStats.completePass > 18))