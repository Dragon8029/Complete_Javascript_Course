// Function Constructor

var john = {
  name: "John", 
  yearOfBirth: 1990, 
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name; 
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  };

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var Cars = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

var honda = new Cars("Honda", "Civic", 2003);
var mitsubishi = new Cars("Mitsubishi", "Endeavor", 2011);

console.log(honda.model);
console.log(mitsubishi.year);

Cars.prototype.tires = 4;

console.log(honda.tires);
console.log(mitsubishi.tires);