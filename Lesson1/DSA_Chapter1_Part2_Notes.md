
# Data Structures & Algorithms
### lesson 1-Part 2: Basic Concepts, Notations, and JavaScript Quick Overview
#### Prepared by:  Jackson S. Soriano, MIT

---

---

## 1.17: Functions: Reusable Blocks of Code

A function groups instructions that perform a task.\
Functions can receive parameters.\
Functions can return a result.\
DSA operations will often be written as functions such as search(), insert(), remove(), or sort().
```js
function sum(a, b) {
return a + b;
}
let result = sum(10, 20);
console.log(result);
```

---

### 1.18: Objects: Grouping Related Information

An object is a collection of name-value pairs.\
The key describes the information.\
The value contains the information.\
Objects help us represent more complex data.
```js
let student = {
name: "Juan",
age: 20
};
console.log(student.name);
```

---

### 1.19: Classes: A Foundation for Data Structures

A class provides a structure for creating objects.\
The lesson uses JavaScript classes to represent data structures.\
A constructor can initialize an object's data.\
Methods can represent operations performed on the structure.
```js
class Student {
constructor(name) {
this.name = name;
}
display() {
console.log(this.name);
}
}
let s = new Student("Juan");
s.display();
```

---

### 1.20: Debugging: Learn to See What Your Code Is Doing

Debugging helps us find problems in code.\
It can also help us understand an algorithm step by step.\
Use browser Developer Tools / Console to inspect output.\
A useful habit: Run → Observe → Find the problem → Fix → Run again.

---

### 1.21: Modern JavaScript: let and const

ES6 introduced let and const.\
let is used for values that may change.\
const is used for a read-only binding.\
Block scope makes let useful for loops and conditional blocks.
```js
let count = 0;
count++;
const course = "DSA";
console.log(count, course);
```

---

### 1.22: Template Literals

Template literals use backticks.\
They make it easier to insert values into strings.\
They can also create multiline strings.\
```js
let name = "Juan";
let score = 95;
console.log(`Student: ${name}`);
console.log(`Score: ${score}`);
```

---

### 1.23: Arrow Functions

Arrow functions provide a shorter function syntax.\
They are useful for writing compact functions.
```js
const sum = (a, b) => a + b;
console.log(sum(10, 20));
```

---

### 1.24: Default Parameters

A function can provide a default value for a parameter.\
If the argument is not supplied, the default value is used.
```js
function multiply(number, multiplier = 3) {
return number * multiplier;
}
console.log(multiply(5));
```

---

### 1.25: Spread and Rest: ...

The same ... syntax can be used in different ways.\
Spread can expand an array into individual values.\
Rest can collect multiple arguments into an array.\
These features can make later DSA code shorter.
```js
let numbers = [1, 2, 3];
function sum(...values) {
return values[0] + values[1] + values[2];
}
console.log(sum(...numbers));
```

---

### 1.26: Destructuring and Swapping

Destructuring lets us assign values from an array.\
A very useful DSA application is swapping two values.\
Swapping is common in sorting algorithms.
```js
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
```
```js
//Destructuring
const colors = ['red', 'green', 'blue'];

// Unpack elements by position
const [primary, secondary, tertiary] = colors;

console.log(primary);   // 'red'
console.log(secondary); // 'green'
console.log(tertiary);  // 'blue'
```
---

### 1.27: Classes and Inheritance

ES6 provides cleaner class syntax.\
A class can extend another class using extends.\
super refers to the parent class.\
For this lesson, focus on understanding the idea rather than mastering OOP.
```js
class Animal {
speak() {
console.log("Sound");
}
}
class Dog extends Animal {
}
let dog = new Dog();
dog.speak();
```

---

### 1.28: What You Should Remember

Before starting actual DSA structures, you should be comfortable with:
- Variables and data types
- Operators and comparisons
- if / else and switch
- for / while / do...while
- Functions
- Objects and classes
- Basic ES6 syntax
- console.log() and debugging

---

### 1.29: Lesson 1 → The Bridge to DSA

Lesson 1 gives us the JavaScript tools we need.\
Next, we will use these tools to represent and manipulate data.\

**Think of the transition this way:**

JavaScript basics → Code → Data → Data Structures → Algorithms


---


### 1.30: Key Takeaways

You do NOT need to memorize every JavaScript feature.\
You need to understand how the basic building blocks work.\
When we start arrays, stacks, queues, linked lists, and algorithms, these same building blocks will appear again and again.\
Master the basics now—and the DSA code becomes much easier to understand.


---
