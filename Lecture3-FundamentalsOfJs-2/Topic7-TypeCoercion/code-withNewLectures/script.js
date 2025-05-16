console.log('learning about type-coercion:  ');
// => Type-Coercion:type-coercion is the process of changing the type of a value from one data-type to another:It basically occurs when javascript automatically converts a value of one data-type to another during an operation:

// => Understand it through arithmetic-operations:
// Type-Coercion acts differently acc to the operators or operations:
// IMP-NOTE:In arithmetic-operations:if we use (addition) operator then type-coercion it work or behaves differently rather than other arithmetic-operators (subtraction,multiplication,division,modulus,++,--) etc:

// -> 1 = Addition:if we use addition operator on one number and one string data-type value:then the number value's data-type gonna get converted into the form of string data-type instead of string data-type get converted into the form of number data-type:
// V.IMP-NOTE:And because of that's why we are getting the result in the form of string:and both of those values get (combined) in the result instead of numeric or arithmetic-addition:
console.log(5 + "5");

// -> 2 = Other-Operators (subtraction,multiplication,division,modulus,increment,decrement):they work differently than addition operator in terms of type-coercion:
// Here if we use one number and one string data-type value:then both of those values get converted into the form of number data-type instead of string data-type:and gonna get result in the form of numeric or arithmetic-operations:
// V.IMP-NOTE: Also if the string cannot be converted to a number, then the  result will be NaN (Not a Number):

// -> Subtraction:
console.log(5 - "5");
// -> Multiplication:
console.log(5 * "5");
// -> Division:
console.log(5 / "5");
// -> Modulus:
console.log(5 % "5");
// -> Increment:
let x = '5';
console.log(++x);
// -> Decrement:
let y = '5';
console.log(--y);