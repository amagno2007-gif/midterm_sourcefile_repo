// 1. Student Class Blueprint
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  // Calculates and returns the average score using a loop
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

  // Returns letter grade based on the average score
  getLetterGrade() {
    const avg = this.getAverage();

    if (avg >= 90) {
      return "A";
    } else if (avg >= 80) {
      return "B";
    } else if (avg >= 70) {
      return "C";
    } else if (avg >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

// 2. Class Analyzer Function
function analyzeClass(students) {
  let classTotalSum = 0;
  let topStudent = null;

  console.log("------- STUDENT REPORT -------");

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = student.getAverage();
    const grade = student.getLetterGrade();

    // Print individual student details
    console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade:${grade}`);

    // Track total sum for overall class average
    classTotalSum += avg;

    // Determine the top-performing student
    if (!topStudent || avg > topStudent.getAverage()) {
      topStudent = student;
    }
  }

  const classAverage = classTotalSum / students.length;

  console.log("-----------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudent.name} with${topStudent.getAverage().toFixed(1)}`);
}

// 3. Test Data & Execution
const studentData = [
  { name: "Student 1", scores: [85, 90, 92] },
  { name: "Student 2", scores: [70, 75, 68] },
  { name: "Student 3", scores: [95, 98, 92] },
  { name: "Student 4", scores: [55, 60, 58] }
];

// Instantiating Student class instances from raw data
const students = studentData.map(data => new Student(data.name , data.scores));

// Running the analysis
analyzeClass(students);
