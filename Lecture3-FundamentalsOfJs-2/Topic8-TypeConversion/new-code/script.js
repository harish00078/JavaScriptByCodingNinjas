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
console.log(typeof String(num1));
// -> using (toString) method:
console.log(typeof num1.toString());

// => 2: Converting to Number:
// we have multiple-ways to do it:
// -> 1 = first is (Number()) function:
// -> 2 = second is (Unary (+) plus or addition-operator):
// -> 3 = third is (parseInt()) function:
// -> 4 = fourth is (parseFloat()) function:
let num2 = "123";

// -> using (Number) function:
console.log(Number(num2));
console.log(typeof Number(num2));
// -> using (Unary (+) plus or addition-operator):
console.log(+num2);
console.log(typeof +num2);
// -> using (parseInt) function:
console.log(parseInt(num2));
console.log(typeof parseInt(num2));
// -> using (parseFloat) function:
console.log(parseFloat(num2));
console.log(typeof parseFloat(num2));

// IMP-NOTES:
// => Notes on Converting to string:
// IMP: String() and toString() are used for type conversion to string in JavaScript, but String() can convert any data type to a string while toString() cannot convert null and undefined values to a string:

// => Notes on Converting to number:

// IMP-NOTES:about Number-method:
// -> 1: Convert (simple-string) or (non-number-string) to number:
// IMP = instead of number-string if we only have the string:then what will be the answer of that string.if try to convert it into the number through (Number) method:
// IMP = then in result we will have the (NaN):NaN is basically used to represents the (Not a number)  value in js:
// console.log(Number("value"));
// -> 2: convert boolean-value to number:
// IMP = if we use (Number) function on boolean values:then in result we will have the (1):because in bitwise system (1) represents the (true) value and (0) represents the (false) value:
// console.log(Number(true));

// IMP-NOTES:about Unary (+) plus or addition-operator:
// In javascript,the Unary (+) plus or addition-operator can be used to convert a value to a number. When used before a value, it attempts to convert the value to a number data-type.

// IMP-NOTES:about parseInt() function:
// -> IMP = parseInt-method is different from the (number) method:because the number-method is not able to convert the string with number and character values into the number:it will gave us the result in (NaN) value:
// => 1 = parseInt-method:basically provide the result of string-value in number-value:only even if we have the (character-values) after the (number-values):
console.log(parseInt("12345f"));
// => 2 = if we have the character-values:before the (number-value) in the string:
// then we will have the same result as (number) method for the (simple-string) value:and that is (NaN):
console.log(parseInt("f12345"));

// IMP-NOTES:about parseFloat() function:

// -> IMP = same-thing will happen here in (parsefloat) as (parseInt) for all the conversions:
// only difference is that here we use the floating-point number:
console.log(parseFloat("123.45f"));
console.log(parseFloat("f123.45"));

// => Notes on Converting to Boolean:




// NOTE: every (integer) or (floating-point) value is considered as (number) or (number) data-type in javascript:
