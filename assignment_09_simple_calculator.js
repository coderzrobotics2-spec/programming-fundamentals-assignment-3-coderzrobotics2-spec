// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function showMenu() {
  console.log("\n============================");
  console.log("     SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

let running = true;
while (running) {
  showMenu();
  let choice = readlineSync.question("Select an operation (1-7): ");

  if (choice === "7") {
    console.log("Goodbye!");
    running = false;
    continue;
  }

  if (!["1", "2", "3", "4", "5", "6"].includes(choice)) {
    console.log("Error: please select a number from 1 to 7.");
    continue;
  }

  let a = readlineSync.questionFloat("Enter first number : ");
  let b = readlineSync.questionFloat("Enter second number: ");

  let result;
  let symbol;

  if (choice === "1") {
    result = add(a, b);
    symbol = "+";
  } else if (choice === "2") {
    result = subtract(a, b);
    symbol = "-";
  } else if (choice === "3") {
    result = multiply(a, b);
    symbol = "*";
  } else if (choice === "4") {
    if (b === 0) {
      console.log("Error: Cannot divide by zero.");
      continue;
    }
    result = divide(a, b);
    symbol = "/";
  } else if (choice === "5") {
    if (b === 0) {
      console.log("Error: Cannot take modulus by zero.");
      continue;
    }
    result = modulus(a, b);
    symbol = "%";
  } else if (choice === "6") {
    result = exponent(a, b);
    symbol = "**";
  }

  console.log("Result: " + a + " " + symbol + " " + b + " = " + result.toFixed(2));
}