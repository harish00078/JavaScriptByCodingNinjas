console.log("learning about type-coercion");

// Type Coercion with Arithmetic Operators
// Demonstrates how JavaScript handles operations between different data types

// 1. Addition with numbers
console.log(5 + 5); // Output: 10 (number)

// 2. Addition with string and number
// When adding a string and number, JavaScript converts the number to a string
// and performs string concatenation or combination instead of numeric addition
let num = "5" + 5; // "55" (string concatenation)
console.log(num);
console.log(typeof num); // "string"

// 3. String concatenation with multiple strings
// The + operator concatenates multiple strings together
let fullName = "harish" + " " + "kumar"; // String concatenation
console.log(fullName); // "harish kumar"
console.log(typeof fullName); // "string"

// 4. Subtraction with string and number
// For subtraction, JavaScript attempts to convert strings to numbers
// Unlike addition, subtraction always tries to perform numeric operation
let subtraction = '55' - 10; // JavaScript converts '55' to number 55
console.log(subtraction); // 45 (numeric subtraction)
console.log(typeof(subtraction)); // "number"

// 5. Other arithmetic operators (multiplication)
// Similar to subtraction, other arithmetic operators attempt numeric conversion
let multiple = '55' * 10; // JavaScript converts '55' to number 55
console.log(multiple); // 550 (numeric multiplication)
console.log(typeof multiple); // "number"