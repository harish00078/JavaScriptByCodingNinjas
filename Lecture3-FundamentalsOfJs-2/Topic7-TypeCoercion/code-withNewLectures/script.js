console.log('learning about type-coercion:  ');
// => Type-Coercion:type-coercion is the process of changing the type of a value from one data-type to another:It basically occurs when javascript automatically converts a value of one data-type to another during an operation:

// => Understand it through arithmetic-operations:
// Type-Coercion acts differently acc to the operators or operations:
// IMP-NOTE:In arithmetic-operations:if we use (addition) operator then type-coercion it work or behaves differently rather than other arithmetic-operators (subtraction,multiplication,division,modulus,++,--) etc:

// -> 1 = Addition:if we use addition operator on one number and one string value:then the number value's data-type gonna get converted into the form of string instead of string get converted into the form of number:
// V.IMP-NOTE:And because that's why we are getting the result in the form of string:and they also get combined in the result instead of numeric-addition:
console.log(5 + "5");