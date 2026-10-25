const scores = [85, 72, 91, 64, 78];

console.log("Student Scores:");
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
console.log("");

let totalScore = 0;
let highestScore = scores[0];
let lowestScore = scores[0];
let passedCount = 0;
let failedCount = 0;

scores.forEach((score, index) => {
    totalScore += score;


if (score > highestScore) {
    highestScore = score;
}
if (score < lowestScore) {
    lowestScore = score;
}

let resultString = "";

if (score >= 90 && score <= 100) {
    resultString = "Excellent - Passed";
    passedCount++;
} else if (score >= 80 && score < 89) {
    resultString = "Very Good - Passed";
    passedCount++;
} else if (score >= 75 && score <= 79){
    resultString = "Good - Passed";
    passedCount++;
} else {
    resultString = "Failed";
    failedCount++;
}

console.log(`Student ${index + 1}: ${score} - ${resultString}`);
});

const averageScore = totalScore / scores.length;
console.log("");
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Number of Students Passed: ${passedCount}`);
console.log(`Number of Students Failed: ${failedCount}`);