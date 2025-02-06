console.log("learning about Precedence in js");
// Precedence: It means (Priority):precedence refers to the order in which operators are evaluated in an expression. Operators with higher-precedence are executed before those with lower-precedence.
// LIKE:In maths we have (BODMAS):

// => precedence refers to the order in which operators are evaluated in an expression. Operators with higher precedence are executed before those with lower precedence.
// -> Operator Precedence Table (from highest to lowest):
// 1. Parentheses () → Highest precedence
// 2. Unary operators !, ++, --, ~
// 3. Multiplication, Division * / %
// 4. Addition, Subtraction + -
// 5. Bitwise Shift << >> >>>
// 6. Comparison > < >= <=
// 7. Equality == != === !==
// 8. Bitwise AND &
// 9. Bitwise XOR ^
// 10. Bitwise OR |
// 11. Logical AND &&
// 12. Logical OR ||
// 13. Assignment = += -= *= etc. → Lowest precedence

// Example:
let m1 = 20;
let m2 = 15;   
let m3 = 10;

// => IMP-NOTE1:simple way of using operators:but its not the appropriate way of using operators:
console.log(m1 + m2 + m3 / 3); 
// expected output: 15
// but the actual output is: 38.333333333333336

// => IMP-NOTE2:So instead of learning or remembering the precedence or priority of the operators:we have the simple way to use  operator in appropriate way:
// IMP: Which is basically using the (parentheses) on operator-contexts or expressions:because they have the highest precedence:
console.log((m1 + m2 + m3) / 3);