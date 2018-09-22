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

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);


// More operators

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

/************************************
 * Coding Challenge 1
 ************************************/

// var markHeight = 2.1;
// var johnHeight = 2.2;
// var markWeight = 130;
// var johnWeight = 165;

// var markBmi = markWeight / (markHeight * markHeight);
// var johnBmi = johnWeight / (johnHeight * johnHeight);
// var higher = markBmi > johnBmi;
// console.log("Is Mark's BMI higher than John's? ", higher);


/************************************
 * Boolean Logic
 ************************************/

//  var firstName = "John";
//  var age = 26;

//  if (age < 13) {
//      console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) { // Between 13 and 20
//      console.log(firstName + ' is a teenager.');
//  } else if (age >= 20 && age < 30) {
//      console.log(firstName + ' is a young man.');
//  } else {
//      console.log(firstName + ' is a man.');
//  }

/************************************
 * Truthy and Falsy values and equality operators
 ************************************/

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

//  var height;

//  height = 23;
//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//      console.log('Variable has NOT been defined');
//  }

//  // Equality operators
//  if (height == '23') {
//      console.log('The == operator does type coercion!');
//  }

//=================================
// Coding Challenge 2
//=================================
//***** My Solution *****

// var jScoreOne = 89;
// var jScoreTwo = 120;
// var jScoreThree = 103;
// var mScoreOne = 116;
// var mScoreTwo = 94;
// var mScoreThree = 123;
// var maryScoreOne = 97;
// var maryScoreTwo = 134;
// var maryScoreThree = 105;

// var jAverage = (jScoreOne + jScoreTwo + jScoreThree) / 3;
// var mAverage = (mScoreOne + mScoreTwo + mScoreThree) / 3;
// var maryAverage = (maryScoreOne + maryScoreTwo + maryScoreThree) / 3;

// if (jAverage > mAverage && jAverage > maryAverage) {
//     console.log("John's team wins with an average score of", jAverage);
// } else if (mAverage > maryAverage) {
//     console.log("Mikes team wins with an average score of", mAverage);
// } else {
//     console.log("Mary's team wins with an average score of", maryAverage);
// }

// ***** Course Solution *****

// var scoreJohn = (110 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 102) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && socreJohn > scoreMary) {
//     console.log("John's team wins with " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log("Mike's team wins with " + scoreMike + " points");
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log("Mary's team wins with " + scoreMary + " points");
// } else {
//     console.log("There is a draw");
// }
// if (scoreJohn > scoreMike) {
//     console.log("John's team wins with " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn) {
//     console.log("Mike's team wins with " + scoreMike + " points");
// } else {
//     console.log("There is a draw");
// }

//=================================
// Functions
//=================================

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + " retires in " + retirement + " years.");
//     } else { 
//         console.log(firstName + " is already retired.");
//     }
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "Jane");

//=================================
// Function Statements and Expressions
//=================================

// Function declaration
// function whatDoYouDo(job, firstName) {

// }

// Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + " teaches kids how to code";
//         case 'driver':
//             return firstName + " drives race cars";
//         case 'designer':
//             return firstName + " designs pretty things";
//         default:
//             return firstName + " hasn't decided what to do yet";
//     }
// }

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("driver", "Mike"));
// console.log(whatDoYouDo("retired", "Jane"));

/************************************
 * Arrays
 ************************************/

//  // Initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[0], years[0]);
//  console.log(names.length);

//  // Matate array data
//  names[1] = "Ben";
//  names[names.length] = "Mary";
//  console.log(names);
 
//  // Different data types
//  var john = ["John", "Smith", 1990, "designer", false];

//  john.push("blue");
//  john.unshift("Mr");
//  console.log(john);

//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(1990));

//  var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
//  console.log(isDesigner);

/************************************
 * Coding Challenge 3
 ************************************/

// **** My solution *****

// var tips = [];
// var finalBill = [];

// function calculateTip (bill) {
//     if (bill < 50) {
//         var tipTwenty = bill * 0.2;
//         tips.push(tipTwenty);
//         finalBill.push(bill + tipTwenty);
//     } else if (bill >= 50 && bill < 200) {
//         var tipFifteen = bill * 0.15;
//         tips.push(tipFifteen);
//         finalBill.push(bill + tipFifteen);
//     } else {
//         var tipTen =  bill * 0.10;
//         tips.push(tipTen);
//         finalBill.push(bill + tipTen);
//     }
// } 

// calculateTip(124);
// calculateTip(48);
// calculateTip(268);

// console.log(tips, finalBill);

// ***** Course Solution *****

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 &&  bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips  = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalValues = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2],]

// console.log(tips, finalValues);

/************************************
 * Objects and properties
 ************************************/

//  // Object Literal
//  var john = {
//       firstName: "John", 
//       lastName: "Smith",
//       birthYear: 1990,
//       family: ["Jane", "Mark", "Bob", "Emily"],
//       job: "teacher",
//       isMarried: false
//  };
//  console.log(john.firstName);
//  console.log(john["lastName"]);
//  var x = "birthYear";
//  console.log(john[x]);

//  john.job = "designer";
//  john["isMarried"] = true;
//  console.log(john);

//  // new Object syntax
//  var jane = new Object();
//  jane.name = "Jane";
//  jane.birthYear = 1969;
//  jane["lastName"] = "Smith";
//  console.log(jane);

/************************************
 * Objects and Methods
 ************************************/

// var john = {
//     firstName: "John", 
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function() {
//       this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

/************************************
 * Coding Challenge 4
 ************************************/

 // var markHeight = 2.1;
// var johnHeight = 2.2;
// var markWeight = 130;
// var johnWeight = 165;

// var markBmi = markWeight / (markHeight * markHeight);
// var johnBmi = johnWeight / (johnHeight * johnHeight);
// var higher = markBmi > johnBmi;
// console.log("Is Mark's BMI higher than John's? ", higher);

var mark = {
  firstName: "Mark",
  lastName: "Jones",
  height: 2.3,
  weight: 165,
  calcBmi: function() {
    this.bmi = (this.weight / (this.height * this.height));
  }
};
var john = {
  firstName: "John",
  lastName: "Smith",
  height: 2.3,
  weight: 165,
  calcBmi: function() {
    this.bmi = (this.weight / (this.height * this.height));
  }
};
john.calcBmi();
mark.calcBmi();
if (mark.bmi > john.bmi) {
  console.log(mark.firstName + " " + mark.lastName + " "+ "has the higher BMI");
} else if (john.bmi > mark.bmi) {
  console.log(john.firstName + " " +john.lastName + " " + "has the higher BMI");
} else {
  console.log("They have the same BMI");
}

console.log(mark);
console.log(john);