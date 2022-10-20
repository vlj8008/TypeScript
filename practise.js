"use strict";
// Different ways to write functions:
// Using function keyword
function Adding(num1, num2) {
    return num1 + num2;
}
console.log(Adding(2, 2));
// No function keyword & using arrow function short cut.
const Subtracting = (num3, num4) => num3 - num4;
console.log(Subtracting(2, 2));
// Same function without arrow shortcut
const Subtracting2 = function (num1, num2) {
    return num1 - num2;
};
console.log(Subtracting2(10, 5));
// Optional parameters (indicated by "?")
function Multiplying(num1, num2, num3) {
    return num1 * num2 * (num3 || 1); // "||" is logical OR operator.
}
console.log(Multiplying(2, 4));
console.log(Multiplying(2, 4, 2)); // using optional third number
// Default parameters
function power(value, exponent = 2) {
    return Math.pow(value, exponent); // double astericks is exponential operator. Exponent represents the power value
}
console.log(power(10));
// Generic functions
function getItems(items) {
    return new Array().concat(items);
}
// generics allows me to use different data types, so I can re-use functions. Function can take any value type.
let concatResult = getItems([1, 4, 5, 3, 7, 2]);
console.log(concatResult);
let concatString = getItems(["hello", "world", "out", "there"]);
console.log(concatString);
// Classes
class Employee {
    constructor(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
        return `${this.fname} Last name: ${this.lname}`;
    }
}
let emp1 = new Employee(2, "Jim", "Alcock");
//john.id = 1;
//john.fname = "John";
//john.lname = "Jones";
let fullName = emp1.getFullName();
console.log(fullName);
