// Different ways to write functions:

// Using function keyword
function Adding(num1:number, num2:number): number{
    return num1 + num2;

}

console.log(Adding(2,2));

// No function keyword & using arrow function short cut.

const Subtracting = (num3:number, num4:number):number=>num3-num4;

console.log(Subtracting(2,2));

// Same function without arrow shortcut

const Subtracting2 = function(num1:number,num2:number):number{
    return num1 - num2;
}

console.log(Subtracting2(10,5));

// Optional parameters (indicated by "?")

function Multiplying(num1: number, num2:number,num3?:number):number{
    return num1* num2 *(num3||1); // "||" is logical OR operator.
    
}

console.log(Multiplying(2,4));
console.log(Multiplying(2,4,2)); // using optional third number

// Default parameters

function power(value: number, exponent:number = 2){
    return value ** exponent;  // double astericks is exponential operator. Exponent represents the power value
}

console.log(power(10));

// Generic functions

function getItems<TypeWhatever>(items:TypeWhatever[]):TypeWhatever[]{
    return new Array<TypeWhatever>().concat(items);

}
// generics allows me to use different data types, so I can re-use functions. Function can take any value type.

let concatResult = getItems([1,4,5,3,7,2]);
console.log(concatResult);

let concatString = getItems(["hello", "world", "out", "there"]);
console.log(concatString);

// Classes

class Employee{
    id: number;  //exclamation mark handles error about not being assigned a value 
    fname: string;
    lname: string;

    constructor(id:number, fname:string, lname:string){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }

    getFullName():string{
        return `${this.fname} Last name: ${this.lname}`;
    }
}

let emp1 = new Employee(2,"Jim","Alcock");

//john.id = 1;
//john.fname = "John";
//john.lname = "Jones";

let fullName = emp1.getFullName();

console.log(fullName);

