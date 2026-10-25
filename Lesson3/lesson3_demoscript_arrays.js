// execute safer and cleaner, easy to catch bugs
'use strict'; 

function showSection(title){
    console.log('\n' + '='.repeat(72));
    console.log(title);
    console.log('='.repeat(72));
}

function showTopic(title){
    console.log('\n---' + title + '---');
}

showSection('Topic: Arrays');

showTopic('Creating and accessing Arrays');
// create empty array
const emptyArray = [];

const daysOfWeek = [
    'Sunday',
    'Saturday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// print the array
// console.log();
console.log('empty array:', emptyArray);
console.log('days of the week:', daysOfWeek);

console.log('First Day: ', daysOfWeek[0]);
console.log('Last Day:', daysOfWeek[daysOfWeek.length - 1]);

// Array constructor
const sevenSlots = new Array(7);
const subjects = new Array('DSA','Javascript','Python');

console.log('Array with seven empty slots:', sevenSlots);
console.log('Array created with values:', subjects);

showTopic('Iterating through an array');
//for loop and indices
for (let index = 0; index < daysOfWeek.length; index++){
    console.log(`Index ${index}: ${daysOfWeek[index]}`);
}

// for ... of
for (const day of daysOfWeek){
    console.log(`Day value: ${day}`);
}

showTopic('Fibonacci sequence');
// create array to hold fibonacci
const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

// compute the next value using for loop
for (let index = 3; index < 11; index++) {
    fibonacci[index] = fibonacci[index-1] + fibonacci[index-2];    
}

console.log('First  11 fibonacci values: ', fibonacci.slice(1));

showTopic('Adding Elements');

const numbersForAdding = [0,1,2,3,4];
// add number at the next free index
numbersForAdding[numbersForAdding.length] = 5;
numbersForAdding.push(6,7);
//adds at the beginning
numbersForAdding.unshift(-2, -1);

console.log('Numbers after operation: ', numbersForAdding)

showTopic('Removing Elements');
const numbersForRemoving = [10, 20, 30, 40, 50];

// remove and return last element
const  removedLast = numbersForRemoving.pop();
// remove and return first element
const removedFirst = numbersForRemoving.shift();

console.log('Removed from the start: ', removedFirst);
console.log('Removed from the end: ', removedLast);
console.log('after pop: ', numbersForRemoving);

showTopic('Using splice at a specific position');
const spliceNumbers = [0, 1, 2, 3, 4, 5, 6];
// removed and return 3 elements
const removedBySplice = spliceNumbers.splice(2,3);

console.log('values removed by splice: ', removedBySplice);
console.log('after removal: ', spliceNumbers);

// insert 2, 3, 4 at index 2
spliceNumbers.splice(2, 0, 2, 3, 4);
console.log('after insertion: ', spliceNumbers);

// replace values beginning at index 2
spliceNumbers.splice(2, 3, 20, 30, 40);
console.log('after replacement: ', spliceNumbers);

showTopic('Why delete should be avoided for arrays');
const deleteExample = [10, 20, 30, 40];

delete deleteExample[1];
console.log('after delete: ', deleteExample);
console.log('length after delete: ' , deleteExample.length);

showTopic('Two-Dimensional Arrays');

//  Each inner array represents one row or one day of temperature readings
const averageTemperature = [
    [72, 75, 79, 79, 81, 81],
    [81, 79, 75, 75, 73, 72]
];

// access row zero and column 2
console.log('Day 1, reading 3: ' , averageTemperature[0][2]);
console.log(averageTemperature[0].length)

// print every cell of 2-D array
function printMatrix(matrix) {
    // outer loop visits row
    for (let row = 0; row < matrix.length; row++) {
        // inner loop visits columns
        for (let column = 0; column < matrix[row].length; column++) {
            console.log(`Row ${row}, Column ${column}: ${matrix[row][column]}`)
        }
    }
}
// traverse the 2-D array
printMatrix(averageTemperature);

showTopic('Three-Dimensional Arrays');
//create 3x3x3 structure
const matrix3x3x3 = [];
// build and fill the array
for (let row = 0; row < 3; row++) {
    matrix3x3x3[row] = [];
    for (let column = 0; column < 3; column++) {
        matrix3x3x3[row][column] = [];
        for (let depth = 0; depth < 3; depth++) {
            matrix3x3x3[row][column][depth] = row + column + depth;
        }
    }    
}

// display the complete array
console.log('3x3x3 array: ', matrix3x3x3);
console.log('value at [2][1][0]: ', matrix3x3x3[2][1][0]);

showTopic('Joining Arrays with concat');
const negativeNumbers = [-3, -2, -1];
const zero = 0;
const positiveNumbers = [1, 2, 3];

const joinedNumbers =  negativeNumbers.concat(zero, positiveNumbers);
console.log('joined numbers: ', joinedNumbers);

showTopic(' Every, some, and for each: visiting arrays');
const numbers1to15 = [];

for (let index = 1; index < 16; index++) {
    numbers1to15[index - 1] = index;
    
}
// console.log(numbers1to15);
// return true when a number is  evenly divisible by 2
const isEven = number => number % 2 === 0;
// if every element satisfies the condition
console.log('Are all values even?', numbers1to15.every(isEven));
// some asks whether at least one element satisfies the condition
console.log('is at least one value even?', numbers1to15.some(isEven));

// for each performs an action once for every element
numbers1to15.forEach(number =>{
        console.log(`${number} is ${isEven(number) ? 'even' : 'odd'}`)
});

showTopic("Transforming, filtering, and reducing");
//map creates one result for every original element
const evenTests = numbers1to15.map(isEven);
//filter keeps only the elements that pass the condition
const evenNumbers = numbers1to15.filter(isEven);
//reduce combines all elements into one accumulated result.
const total = numbers1to15.reduce((runningTotal, number) => {
    return runningTotal + number;
});

console.log('result of map: ', evenTests);
console.log('result of filter: ', evenNumbers);
console.log('result of reduce: ', total);

showTopic('Array Iterators');
// return key value pairs using for loop
for (const [index, value] of subjects.entries()){
    console.log(`Entry -> index: ${index}, value: ${value}`);
}

// keys returns only the index
for (const index of subjects.keys()){
    console.log('key: ', index);
}

// values only
for (const value of subjects.values()) {
    console.log('value: ', value);
}

//obtain the array's iterator directly through symbol .iterator
const subjectIterator =  subjects[Symbol.iterator]();

//retrieve the first two iterator results manually
console.log('First iterator result: ', subjectIterator.next());
console.log('Second iterator result: ', subjectIterator.next());

showTopic('Creating, filling, and copying arrays');
//copying
const copiedSubjects = Array.from(subjects);
//created array from supplied arguments
const createdNumbers = Array.of(1, 2, 3, 4, 5, 6);
// create an array of length 6 and fill every position with one.
const ones = Array(6).fill(1);

console.log('array.from result: ', copiedSubjects);
console.log('array.of result: ', createdNumbers);
console.log('fill result: ', ones);

// try to search also reverse() and copywithin();

showTopic('Sorting Arrays');
const defaultSortedNumbers = [15, 2, 10, 1, 8];
defaultSortedNumbers.sort();
console.log('Default string-like sort', defaultSortedNumbers);

//ascending orders sorting by substracting b from a
const ascendingNumbers = [15, 2, 10, 1, 8];
ascendingNumbers.sort((a, b) => a - b );
console.log('Numeric ascending order', ascendingNumbers);

const friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

// sort the people from youngest to oldest
friends.sort((personA, personB) => personA.age - personB.age );
console.log('People sorted by age: ', friends);

showTopic('Searching Arrays');
const searchValues = [1, 2, 3, 10, 5, 10];

console.log('First Index of 10: ', searchValues.indexOf(10));
console.log('last Index of 10: ', searchValues.lastIndexOf(10));
console.log('Does the array include 10: ', searchValues.includes(10));

const multipleOf13 =  number => number % 13 === 0;
const possibleMultiples = [1, 5, 13, 20, 26];

// find return the first matching value
console.log('First multiple of 13: ', possibleMultiples.find(multipleOf13));
console.log('index of First multiple of 13: ', possibleMultiples.findIndex(multipleOf13));

showTopic('converting arrays to strings');

console.log('using toString: ', numbers1to15.toString());

console.log('using join: ', numbers1to15.join('-'));

showTopic('Typed Arrays');

const int16Values =  new Int16Array(5);
//fill this array
for (let index = 0; index < int16Values.length; index++) {
    int16Values[index]= index + 1;    
}

console.log('Int16Array values: ', int16Values);