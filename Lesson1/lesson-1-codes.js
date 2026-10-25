//code demonstration
console.log("Hello, DSA!")

//variables
/**
let score = 90;
score = 95;
const student_name = "Juan";
console.log(score);
console.log(student_name);
*/

//common javascript values
/* let age = 20;
let price = 99.50;
let student = "Pedro";
let passed = true;
console.log(typeof age);
console.log(typeof student); */

//displaying output
/* let number = 10;
console.log(number);
console.log("Testing ..."); */

//operators
/* let a =10;
let b = 3;
console.log(a + b);
console.log(a % b);
console.log(a > b); */

//equal operator  === vs. ==
/* 

console.log(5 == "5");
console.log(5 === "5"); */

// conditional operators
/* let number = 10;
if (number > 100) {
    //executes if true
    console.log("Positive");
} else{
    //executes if false
    console.log("not positive");
} */

// ternary operator
/* let age = 17;
//if else statement using ternary operator
let student_status = age >= 18 ? "Adult" : "Minor";
console.log(student_status); */

// switch
/* let day = 7;
switch (day) {
    case 1:
        console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")
    break;
    default:
        console.log("Other day");
} */

// for loop
/* for (let i = 0; i < 5; i++){
    // loop block code
    console.log(i);
} */

// while and do while loops
/* let i = 3;
while (i < 3) {
        //script
        console.log("while", i);
        i++;
}

let x = 3;
do {
        //script
        console.log("do while:", x);
    x++;
} while(x < 3 ); */

/* function sum(a, b){
    return a + b;
}

let result = sum(10, 20);
// console.log(result);
console.log(sum(1,2)); */

/* let student = {
    name: "Juan",
    age: 20,
    section: "BSIT 2-1"
};

console.log(student.section); */

/* class Student {
    // properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods
    display(){
        // console.log(this.name + this.age);
        console.log(`Name is: ${this.name} Age: ${this.age}`);
    }

}

let stud1 = new Student("Juan ", 21);
let stud2 = new Student("Maria ", 30);

stud1.display();
stud2.display(); */

// const display1 = () => console.log("outside class");

// display1();

// const multiply = (number, multiplier=3) => number * multiplier;

// console.log(multiply(5));
// console.log(multiply(5,10));



// function sum(a, b){
//     return a + b;
// }

/* const sum = (a,b) => a + b;

let result = sum(10, 20);
// console.log(result);
console.log(sum(1,2)); */

/* let numbers = [1,2,3];
const sum = (...values) =>
    values[0] + values[1] + values[2]
;

console.log(sum(...numbers)); */

/* const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

console.log(`
    ${primary},  
    ${secondary}, 
    ${tertiary}    
`);
 */
class Person {
    // properties
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods
    display(){
        // console.log(this.name + this.age);
        console.log(`Name is: ${this.name} Age: ${this.age}`);
    }

}

let stud1 = new Person("Juan ", 21);
let stud2 = new Person("Maria ", 30);

stud1.display();
stud2.display();

class Employee extends Person {}
let itexpert = new Employee("Mark", 21);
itexpert.display();