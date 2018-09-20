/*
var name = "John"; 
console.log(name);

var lastName = "Smith";

console.log(lastName);

var age = 26;

console.log(age);

var fullAge = true;
console.log(fullAge);s
*/

// Lecture: variables 2
/*
var name = "John";
var age = "26";

console.log(name + " " + age);

var job, isMarried;

var lastName = prompt("What is the Last Name?");
console.log(name + " " + lastName);

// alert(name + " " + lastName + " is " + age + " Years Old!");
*/


// Lecture: Operators
// var now = 2016
// var birthYear = now - 26;

// birthYear = now - 26 * 2;

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = 3 + 5 * 4 - 6;

//============================================================================

// Lecture: if/else statements

// var name = "John"; 
// var age = 26;
// var isMarried = "no";

// if (isMarried === "yes") {
//   console.log(name + " is married!");
// } else {
//   console.log(name + " will hopefully marry soon :)");
// }

// isMarried = false;

// if(isMarried) {
//   console.log('YES!');
// } else {
//   console.log('NO!');
// }

// if(23 == "23") {
//   console.log("Something to print...");
// }

//====================================================
// Lecture: boolean logic and switch

// var age = 21;

// if (age < 20) {
//   console.log("John is a teenager");
// } else if(age >= 20 && age < 30) {
//   console.log("John is a Young Man!")
// } else {
//   console.log("John is an old man.");
// }

// var job = "driver";

// job = prompt("What does john do?");

// switch (job) {
//   case "teacher":
//           console.log("John teaches kids.");
//           break;
//   case "driver":
//           console.log("John drives a cab in Lisbon");
//           break;
//   case "cop":
//           console.log("John helps fight crime");
//           break;
//   default:
//       console.log("John does something else.");
// }

//==========================================================
//-------------------
// CODING CHALLENGE 1
//-------------------
/*
var height1 = 1;
var age1 = 1;
var name1 = prompt("Player 1 name?");
var height2 = 10;
var age2 = 10;
var name2 = prompt("Player 2 Name?");

var player1Score = height1 + (5 * age1);
var player2Score = height2 + (5 * age2);

if(player1Score > player2Score) {
  console.log(name1 + " " + player1Score + " points");
  console.log(name2 + " " + player2Score + " points");
  console.log(name1 + " WINS!!!");
} else if (player1Score < player2Score) {
  console.log(name1 + " " + player1Score + " points");
  console.log(name2 + " " + player2Score + " points");
  console.log(name2 + " WINS!!!");
} else {
  console.log(name1 + " " + player1Score + " points");
  console.log(name2 + " " + player2Score + " points");
  console.log(name1 + " and " + name2 + " are equals!");
}
*/
// var heightJohn = 195;
// var heightMike = 195;
// var ageJohn = 27;
// var ageMike = 26;
// var scoreJohn = heightJohn + 5 * ageJohn;
// var scoreMike = heightMike + 5 * ageMike;
// var heightMary = 195;
// var ageMary = 29;
// var scoreMary = heightMary + 5 * ageMary;

// if(scoreJohn > scoreMike && scoreJohn > scoreMary){
//   console.log("John wins the game with " + scoreJohn + " points!");
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary){
//   console.log("Mike wins the game with " + scoreMike + " points!");
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log("Mary wins the game with " + scoreMary + " points!");
// } else {
//   console.log("It's a draw!");
// }

//===================
//Lecture: Functions
//===================

/*function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + " is already retired.");
  }
  
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//===================================
//Lecture: Statements and expressions
//===================================
/*
function someFun(par) {
  //code
}

var someFun = function(par) {
  //code
}

// Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
  //do something
}
*/
//=================================
//Lecture: Arrays
//=================================

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'Smith', 1990, 'welder', false];

// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();

// console.log(john);

// if (john.indexOf('teacher') === -1) {
//   console.log("John is NOT a teacher.");
// }

//=================================
// Lecture: Objects
//=================================

// var john = {
//   name: 'John',
//   lastName: 'Smith', 
//   yearOfBirth: 1990, 
//   job: 'teacher', 
//   ismarried: false
// }

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['job'] = 'programmer';

// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;

// console.log(jane);

//=================================
// Lecture: Loops
//=================================

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

//var names = ["John", "Jane", "Mary","Mark", "Bob"];

// for loops
// for (var i = 0; i < names.length; i++){
//   console.log(names[i]);
// }

// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

// while loops
// var i = 0;
// while(i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 1; i < 6; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//=================================
// Coding Challenge 2
//=================================

// var yearOfBirth = [1990, 1980, 1981, 2002, 2004, 2016];

// function printFullAge(yearOfBirth) {

//   var ages = [];
//   var fullAges = [];
//   for (var i = 0; i < yearOfBirth.length; i++){
//       ages[i] = 2018 - yearOfBirth[i];
//     }

//     for (i = 0; i < ages.length; i++) {
//       if (ages[i] >= 18) {
//         console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
//         fullAges.push(true);
//       } else {
//         console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age.');
//         fullAges.push(false);
//       }
//     }
//     return fullAges;
// }

// var full_1 = printFullAge(yearOfBirth);
// var full_2 = printFullAge([2012, 1915, 1999]);

/************************************
 * Operator Precedence
 ************************************/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);