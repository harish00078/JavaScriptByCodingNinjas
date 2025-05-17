console.log("Learn about: type-conversion");
// Type-Conversion:
// Type conversion is the process of converting a value from one data type to another.
// In JavaScript, type-conversion is performed manually with the help of build-in methods.
// Several methods are available to convert values between different data types.

// => 1: Converting to String:
// we have to multiple-ways to do it:
// -> 1 = first is (String()) function:
// -> 2 = second is (toString()) method:
// IMP-NOTE: both are used for type conversion to string in JavaScript, but String() can convert any data type to a string while toString() cannot convert null and undefined values to a string.
let num = 123;
// -> using (String) function:
console.log(typeof (String(num)));
// -> using (toString) method:
console.log(typeof (num.toString()));

// => 2: Converting to Number:
