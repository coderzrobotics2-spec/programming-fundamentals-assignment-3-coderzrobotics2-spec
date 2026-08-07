// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

function addStudent() {
  let name = readlineSync.question("Student name: ");
  let id = readlineSync.questionInt("Student ID: ");
  let count = readlineSync.questionInt("How many scores? ");

  let scores = [];
  for (let i = 0; i < count; i++) {
    scores[i] = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
  }

  students.push({ name: name, id: id, scores: scores });
  console.log('Student "' + name + '" added successfully.');
}

function displayStudents() {
  if (students.length === 0) {
    console.log("No students have been added yet.");
    return;
  }

  console.log("\nName                 ID          Scores               Average");
  console.log("-------------------------------------------------------------------");
  for (let i = 0; i < students.length; i++) {
    let s = students[i];

    let name = s.name;
    while (name.length < 20) {
      name += " ";
    }

    let id = String(s.id);
    while (id.length < 12) {
      id += " ";
    }

    let scores = s.scores.join(", ");
    while (scores.length < 20) {
      scores += " ";
    }

    let average = calculateAverage(s.scores).toFixed(2);

    console.log(name + id + scores + average);
  }
}

function calculateSpecificAverage() {
  let id = readlineSync.questionInt("Enter student ID: ");

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      let average = calculateAverage(students[i].scores).toFixed(2);
      console.log(students[i].name + "'s average score: " + average);
      return;
    }
  }

  console.log("Error: no student found with ID " + id + ".");
}

function showMenu() {
  console.log("\n================================");
  console.log("   STUDENT RECORD SYSTEM MENU");
  console.log("================================");
  console.log("1. Add student");
  console.log("2. Display all students");
  console.log("3. Calculate average score");
  console.log("4. Quit");
}

let running = true;
while (running) {
  showMenu();
  let choice = readlineSync.question("Enter your choice (1-4): ");

  if (choice === "1") {
    addStudent();
  } else if (choice === "2") {
    displayStudents();
  } else if (choice === "3") {
    calculateSpecificAverage();
  } else if (choice === "4") {
    console.log("Goodbye!");
    running = false;
  } else {
    console.log("Error: please enter a number from 1 to 4.");
  }
}