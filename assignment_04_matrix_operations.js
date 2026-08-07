// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(label) {
  console.log("\n--- Enter " + label + " ---");
  let rows = readlineSync.questionInt("Enter number of rows: ");
  let cols = readlineSync.questionInt("Enter number of columns: ");

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = readlineSync.question("Enter row " + (i + 1) + ": ")
      .trim()
      .split(/\s+/)
      .map(Number);
    matrix[i] = row;
  }
  return matrix;
}

function displayMatrix(matrix) {
  let width = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let len = String(matrix[i][j]).length;
      if (len > width) {
        width = len;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let line = "";
    for (let j = 0; j < matrix[i].length; j++) {
      let value = String(matrix[i][j]);
      while (value.length < width) {
        value = " " + value;
      }
      line += value + "  ";
    }
    console.log(line);
  }
}

function transpose(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];

  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

function addMatrices(a, b) {
  let rows = a.length;
  let cols = a[0].length;
  let result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
}

function multiplyMatrices(a, b) {
  let m = a.length;
  let n = a[0].length;
  let p = b[0].length;
  let result = [];

  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

console.log("\n=============================");
console.log("PART A — Transpose a Matrix");
console.log("=============================");
let matrixA = readMatrix("Matrix");
console.log("\nOriginal Matrix:");
displayMatrix(matrixA);
console.log("\nTransposed Matrix:");
displayMatrix(transpose(matrixA));

console.log("\n=============================");
console.log("PART B — Add Two Matrices");
console.log("=============================");
let addA = readMatrix("Matrix A");
let addB = readMatrix("Matrix B");

if (addA.length !== addB.length || addA[0].length !== addB[0].length) {
  console.log("\nError: matrices must be the same size to add.");
} else {
  console.log("\nSum of the two matrices:");
  displayMatrix(addMatrices(addA, addB));
}

console.log("\n=============================");
console.log("PART C — Multiply Two Matrices");
console.log("=============================");
let mulA = readMatrix("Matrix A (M x N)");
let mulB = readMatrix("Matrix B (N x P)");

if (mulA[0].length !== mulB.length) {
  console.log("\nError: columns of A must equal rows of B to multiply.");
} else {
  console.log("\nProduct A x B:");
  displayMatrix(multiplyMatrices(mulA, mulB));
}

