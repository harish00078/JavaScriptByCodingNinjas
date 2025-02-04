console.log("learning about Precedence in js");
// Precedence: It means (Priority):precedence refers to the order in which operators are evaluated in an expression. Operators with higher-precedence are executed before those with lower-precedence.
// -> The precedence of operators in JavaScript is determined by the order in which they are listed in the expression.
// LIKE:In maths we have (BODMAS):

// => precedence refers to the order in which operators are evaluated in an expression. Operators with higher precedence are executed before those with lower precedence.
// -> Operator Precedence Table (from highest to lowest):
// Parentheses () → Highest precedence
// Unary operators !, ++, --
// Multiplication, Division * / %
// Bitwise operators & ^ | ~
// Addition, Subtraction + -
// Comparison > < >= <=
// Equality == != === !==
// Logical AND &&
// Logical OR ||
// Assignment = += -= *= etc. → Lowest precedence

// Example:
let m1 = 20;
let m2 = 15;   
let m3 = 10;
console.log(m1 + m2 + m3 / 3); 
// expected output: 15
// but the actual output is: 38.333333333333336