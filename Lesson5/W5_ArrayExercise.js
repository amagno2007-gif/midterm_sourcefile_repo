'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// Use a for loop to display every name and score.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

// Add Student 6 and 88 at the end.
studentNames.push('Student 6');
studentScores.push(88);

// Add Student 0 and 76 at the beginning.
studentNames.unshift('Student 0');
studentScores.unshift(76);

// Display updated arrays and length.
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first name and score.
studentNames.shift();
studentScores.shift();

// Remove the last name and score.
studentNames.pop();
studentScores.pop();

// Find Student 4's index.
const studentFourIndex = studentNames.indexOf('Student 4');

// Remove Student 4 and their score.
if (studentFourIndex !== -1) {
  studentNames.splice(studentFourIndex, 1);
  studentScores.splice(studentFourIndex, 1);
}

// Insert Student 7 and 82 at index 2.
studentNames.splice(2, 0, 'Student 7');
studentScores.splice(2, 0, 82);

// Display the updated arrays.
console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

// Calculate the total score.
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

// Calculate the average score.
const averageScore = totalScore / studentScores.length;

// Find the highest score.
const highestScore = Math.max(...studentScores);

// Find the lowest score.
const lowestScore = Math.min(...studentScores);

// Display all statistics.
console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

// Use filter to obtain passing scores.
const passingScores = studentScores.filter(score => score >= 75);

// Use map to produce Passed or Failed statuses.
const statuses = studentScores.map(score => (score >= 75 ? 'Passed' : 'Failed'));

// Use some to check whether at least one student failed.
const hasFailed = studentScores.some(score => score < 75);

// Use every to check whether all students passed.
const allPassed = studentScores.every(score => score >= 75);

// Display all results.
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', hasFailed);
console.log('All Students Passed:', allPassed);

console.log('\nPART F: SORT AND SEARCH');

// Copy the scores using Array.from.
const sortedScores = Array.from(studentScores);

// Sort the copy from highest to lowest.
sortedScores.sort((a, b) => b - a);

// Search for 91 using includes and indexOf.
const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

// Display the results.
console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Use nested loops to process every row and column.
for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    rowTotal += activityScores[i][j];
  }
  // Calculate and store each student's activity average.
  const rowAverage = rowTotal / activityScores[i].length;
  activityAverages.push(Number(rowAverage.toFixed(2)));
  console.log(`${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`);
}

// Display activityAverages.
console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

// Use join to display names separated by " | ".
console.log('Students:', studentNames.join(' | '));
