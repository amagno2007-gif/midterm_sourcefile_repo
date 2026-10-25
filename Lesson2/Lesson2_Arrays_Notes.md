---

---

# Data Structures and Algorithms

### Arrays, Stacks, Queues, and Linked Lists

**Prepared By:** Jackson S. Soriano, MIT  

---

# Learning Outcomes

After this lesson, students should be able to:

- create and manipulate JavaScript arrays;
- explain LIFO and implement a stack;
- explain FIFO and implement a queue;
- use priority and circular queue behavior; and
- create and modify linked-list nodes.

---

# Lesson Roadmap

| Chapter | Main Structure | Central Idea |
| --- | --- | --- |
| 2 | Array | Values accessed through indexes |
| 3 | Stack | Last In, First Out |
| 4 | Queue | First In, First Out |
| 5 | Linked List | Nodes connected through references |

---

<!-- _class: lead -->

# Chapter 2

## Arrays

One variable, many indexed values

---

# What Is an Array?

An **array** stores a sequence of values under one variable name.

```js
const temperatures = [31.9, 35.3, 42.4, 52, 60.8];
```

- Each value is an **element**.
- Each element has an **index**.
- JavaScript indexes begin at `0`.
- `length` tells us how many elements exist.

```js
console.log(temperatures[0]);     // 31.9
console.log(temperatures.length); // 5
```

---

# Creating and Accessing Arrays

Bracket notation is the simplest approach.

```js
const emptyArray = [];

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'
];

console.log(daysOfWeek[0]); // Sunday
console.log(daysOfWeek[6]); // Saturday
```

Valid indexes range from `0` to `length - 1`.

---

# Iterating Through an Array

Use a loop to visit each position.

```js
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(i, daysOfWeek[i]);
}
```

| Loop Part | Meaning |
| --- | --- |
| `let i = 0` | Begin at the first index |
| `i < length` | Stay inside the array |
| `i++` | Move to the next position |

---

# Coding Example: Fibonacci Sequence

Each new value is the sum of the previous two.

```js
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}
```

The array stores earlier results needed by the next calculation.

---

# Adding Elements

```js
const numbers = [0, 1, 2, 3, 4];

// Add at the next free index
numbers[numbers.length] = 5;

// Add at the end
numbers.push(6);
numbers.push(7, 8);

// Add at the beginning
numbers.unshift(-1);
numbers.unshift(-3, -2);
```

JavaScript arrays grow dynamically when values are added.

---

# Removing Elements

```js
const numbers = [10, 20, 30, 40];

const last = numbers.pop();
console.log(last);    // 40
console.log(numbers); // [10, 20, 30]

const first = numbers.shift();
console.log(first);   // 10
console.log(numbers); // [20, 30]
```

- `pop()` removes from the end.
- `shift()` removes from the beginning.
- Both methods return the removed value.

---

# Add or Remove at Any Position

Use `splice()`.

```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

// Remove 3 values beginning at index 2
numbers.splice(2, 3);
// [0, 1, 5, 6]

// Insert values at index 2
numbers.splice(2, 0, 2, 3, 4);
// [0, 1, 2, 3, 4, 5, 6]
```

```js
array.splice(startIndex, deleteCount, itemsToInsert);
```

---

# Avoid `delete` for Array Removal

```js
const values = [10, 20, 30];
delete values[1];

console.log(values);        // [10, empty, 30]
console.log(values.length); // 3
```

`delete` leaves an empty or `undefined` position.

Use these instead:

- `pop()`
- `shift()`
- `splice()`

---

# Two-Dimensional Arrays

A matrix can be represented as an **array of arrays**.

```js
const averageTemp = [
  [72, 75, 79, 79, 81, 81],
  [81, 79, 75, 75, 73, 72]
];

console.log(averageTemp[0][2]); // 79
```

| First Index | Second Index |
| --- | --- |
| Row or day | Column or hour |

---

# Iterating Through a Matrix

A two-dimensional array requires nested loops.

```js
function printMatrix(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (
      let column = 0;
      column < matrix[row].length;
      column++
    ) {
      console.log(matrix[row][column]);
    }
  }
}

printMatrix(averageTemp);
```

---

# Multidimensional Arrays

Each additional dimension usually needs another nested loop.

```js
const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];

  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];

    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
```

---

# Important Array Method Families

| Purpose | Methods |
| --- | --- |
| Add or remove | `push`, `pop`, `shift`, `unshift`, `splice` |
| Test values | `every`, `some` |
| Process values | `forEach`, `map`, `filter`, `reduce` |
| Search | `indexOf`, `find`, `includes` |
| Arrange | `reverse`, `sort` |
| Convert to text | `toString`, `join` |

Choose a method based on the operation—not by memorizing methods alone.

---

# Testing Values: `every()` and `some()`

```js
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = number => number % 2 === 0;

console.log(numbers.every(isEven)); // false
console.log(numbers.some(isEven));  // true
```

- `every()` asks: **Do all elements pass?**
- `some()` asks: **Does at least one element pass?**
- Both stop as soon as the result is already known.

---

# Processing Values

```js
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = number => number % 2 === 0;

numbers.forEach(number => console.log(number));

const tests = numbers.map(isEven);
// [false, true, false, true, false, true]

const evens = numbers.filter(isEven);
// [2, 4, 6]

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
// 21
```

---

# Sorting Numbers Correctly

Default sorting treats values like strings.

```js
const numbers = [15, 2, 10, 1, 8];

numbers.sort();
console.log(numbers); // [1, 10, 15, 2, 8]
```

Provide a comparison function for numeric order.

```js
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 8, 10, 15]
```

---

# Sorting Objects

Objects can be sorted through one of their properties.

```js
const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }
];

friends.sort((a, b) => a.age - b.age);

console.log(friends);
// Ana, Chris, John
```

The comparison function determines the sorting rule.

---

# Searching an Array

```js
const values = [1, 2, 3, 10, 5, 10];

values.indexOf(10);     // 3
values.lastIndexOf(10); // 5
values.includes(10);    // true
values.indexOf(100);    // -1
```

```js
const multipleOf13 = value => value % 13 === 0;
const numbers = [1, 5, 13, 20, 26];

numbers.find(multipleOf13);      // 13
numbers.findIndex(multipleOf13); // 2
```

---

# Creating, Filling, and Copying

```js
const original = [1, 2, 3];

const copy = Array.from(original);
const created = Array.of(4, 5, 6);
const ones = Array(5).fill(1);

console.log(copy);    // [1, 2, 3]
console.log(created); // [4, 5, 6]
console.log(ones);    // [1, 1, 1, 1, 1]
```

`Array.from()` creates a new array from an existing iterable or array-like value.

---

# Typed Arrays

A typed array stores one numeric data type.

```js
const values = new Int16Array(5);

for (let i = 0; i < values.length; i++) {
  values[i] = i + 1;
}

console.log(values);
// Int16Array(5) [1, 2, 3, 4, 5]
```

Examples: `Int8Array`, `Uint8Array`, `Int16Array`, `Int32Array`, `Float32Array`, and `Float64Array`.

---

# Chapter 2 Key Points

- An array organizes values through indexes.
- Indexing begins at `0`.
- JavaScript provides methods for common operations.
- Nested arrays can represent matrices.
- Comparison functions are needed for correct numeric sorting.
- Array methods prepare us to implement other data structures.

---

<!-- _class: lead -->

