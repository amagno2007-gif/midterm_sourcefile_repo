
# Data Structures & Algorithms
### lesson 1-Part1: Basic Concepts, Notations, and JavaScript Quick Overview
#### Prepared by:  Jackson S. Soriano, MIT

---
### 1.1: Data Structures & Algorithms

lesson 1: JavaScript — A Quick Overview

---

### 1.2: Learning Objectives

By the end of this lesson, you should be able to:
- Explain why data structures and algorithms are important.
- Run and test basic JavaScript code.
- Use variables, operators, conditions, and loops.
- Create and use functions, objects, and classes.
- Recognize useful ES6 features used in later DSA examples.

---

### 1.3: Why Do We Study DSA?

Data structures help us organize and store data.\
Algorithms give us ways to solve problems.\
Different solutions can have different performance.\
Choosing the right structure or algorithm can affect program performance.

**Think**: We are not only learning how to make code work—we are learning how to solve problems better.

---

### 1.4: Why JavaScript?

JavaScript is widely used and runs directly in web browsers.\
It can also be used on the server through Node.js.\
The lesson uses JavaScript to build and demonstrate data structures and algorithms.\
**Our goal** is not to master every JavaScript feature—we only need the skills required to implement DSA.

---

### 1.5: How Can We Run JavaScript?

The source introduces three environments:
1. Browser — use the browser's Developer Tools / Console.
2. XAMPP — run JavaScript through a local web environment.
3. Node.js — use a JavaScript-based server environment.
For beginners, the browser console is the simplest place to start.

```js
 console.log("Hello, DSA!");
```

### 1.6: Variables: Storing Information

A variable is a named place where we store a value.\
JavaScript can store numbers, strings, Booleans, objects, arrays, and other values.\
For modern JavaScript, we will commonly use let and const.\
A variable can be updated when using let.

``` javascript
let score = 90;
score = 95;
const name = "Juan";
console.log(score);
console.log(name);
```

---

### 1.7: Common JavaScript Values

Number → 10, 3.14\
String → "Hello"\
Boolean → true / false\
Undefined → declared but no value assigned\
Null → represents no value\
Objects and arrays → important when we begin building DSA structures.
```javascript
let age = 20;
let price = 99.50;
let student = "Juan";
let passed = true;
console.log(typeof age);
console.log(typeof student);
```

---

### 1.8: Displaying Output

For our DSA exercises, console.log() will be especially useful.\
It lets us see values while testing our programs.\
We can use it to observe how an algorithm changes data step by step.
```js
let number = 10;
console.log(number);
console.log("Testing...");
```


---

### 1.9: Operators: Doing Work with Data
<pre>
Arithmetic: +  -  *  /  %
Increment / decrement: ++  --
Assignment: =  +=  -=  *=  /=  %=
Comparison: ==  ===  !=  >  >=  <  <=
Logical: &&  ||  !
</pre>
Operators will appear constantly in algorithms.
```js
let a = 10;
let b = 3;
console.log(a + b);
console.log(a % b);
console.log(a > b);
```
---

### 1.10: A Very Important Difference: == vs ===

== may compare values after type conversion.\
=== checks both value and type.\
For beginners, remember: === is the stricter comparison.\
This matters when comparing values during searching and other algorithms.

```js
console.log(5 == "5");
console.log(5 === "5");
```

---

### 1.11: Conditions: Making Decisions

Programs often need to make decisions.\
Use if when code should run only when a condition is true.\
Use else for the alternative.\
Use else if for additional conditions.
```js
let number = 10;
if (number > 0) {
console.log("Positive");
} else {
console.log("Not positive");
}
```

---

### 1.12: Ternary Operator

The ternary operator is a shorter way to express a simple decision.\
Pattern: condition ? valueIfTrue : valueIfFalse\
Use it when the decision is simple and easy to read.
```js
let age = 20;
let status = age >= 18
? "Adult"
: "Minor";
console.log(status);
```

---

### 1.13: switch: Choosing Among Cases

switch is useful when comparing one value with several possible cases.\
case defines a possible match.\
break stops execution from continuing into the next case.\
default handles the situation when no case matches.
```js
let day = 1;
switch (day) {
case 1:
console.log("Monday");
break;
default:
console.log("Other day");
}
```
---

### 1.14: Loops: Repeating Instructions

Loops are one of the most important programming skills for DSA.\
We use loops to process many values, especially elements in arrays.\
The lesson introduces for, while, and do...while.\
A loop repeats while its condition allows it.
```js
for (let i = 0; i < 5; i++) {
console.log(i);
}
```

---

### 1.15: for Loop: The DSA Workhorse

A for loop usually has three parts:
1. Start / initialization
2. Condition
3. Update / increment\

The example below prints 0 through 4.
```js
for (let i = 0; i < 5; i++) {
console.log(i);
}
```

---

### 1.16: while and do...while

while checks the condition before running the body.\
do...while runs the body first, then checks the condition.\
Therefore, do...while executes at least once.
```js
let i = 0;
while (i < 3) {
console.log(i);
i++;
}
let x = 0;
do {
console.log(x);
x++;
} while (x < 3);
```

---


