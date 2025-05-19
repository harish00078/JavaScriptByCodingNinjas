console.log("Learn about: type-conversion");
// Type-Conversion:
// Type conversion is the process of converting a value from one data type to another.
// In JavaScript, type-conversion is performed manually with the help of build-in methods.
// Several methods are available to convert values between different data types.

// => 1: Converting to String:
// we have multiple-ways to do it:
// -> 1 = first is (String()) function:
// -> 2 = second is (toString()) method:

let num1 = 123;
// -> using (String) function:
console.log(typeof (String(num1)));
// -> using (toString) method:
console.log(typeof (num1.toString()));

// => 2: Converting to Number:
// we have multiple-ways to do it:
// -> 1 = first is (Number()) function:
// -> 2 = second is (Unary (+) plus or addition-operator):
// -> 3 = third is (parseInt()) function:
// -> 4 = fourth is (parseFloat()) function:
let num2 = "123";

// -> using (Number) function:
console.log(Number(num2));
console.log(typeof (Number(num2)));
// -> using (Unary (+) plus or addition-operator):
console.log(+num2);
console.log(typeof (+num2));



// IMP-NOTES:
// => Notes on Converting to string:
// IMP: String() and toString() are used for type conversion to string in JavaScript, but String() can convert any data type to a string while toString() cannot convert null and undefined values to a string:

// => Notes on Converting to number:
// -> 1: Convert (simple-string) or (non-number-string) to number:
// IMP = instead of number-string if we only have the string:then what will be the answer of that string.if try to convert it into the number through (Number) method:
// IMP = then in result we will have the (NaN):NaN is basically used to represents the (Not a number)  value in js:
// console.log(Number("value"));
// -> 2: convert boolean-value to number:
// IMP = here in result we will have the (1):because in bitwise system (1) represents the (true) value and (0) represents the (false) value:
// console.log(Number(true));
// -> 3: every (integer) or (floating-point) value is considered as (number) or (number) data-type in javascript: