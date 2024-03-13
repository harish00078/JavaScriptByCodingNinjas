// here we study about the (type-conversion) in js:
console.log("Learn about: type-conversion");
// type-conversion have three type in it:
// Type conversion is the process of changing the type of a value from one data-type to another. Several methods can be used in JavaScript to convert values to different data-types:

// => first = convert any data-type to (string):
console.log("*** string conversion***");
// IMP = we have two-ways to do this of type conversion:
// -> 1 = first is (String()) function:
// -> 2 = second is (toString()) method:
// Both String() and toString() are used for type conversion to string in JavaScript, but String() can convert any data type to a string while toString() cannot convert null and undefined values to a string:
// -> here we see the function (String):
// IMP = convert the number value to string:
let num = 123;
console.log(num);
let str1 = String(num);
console.log(typeof str1);
// IMP = convert the boolean value to string:
let bool = true;
console.log(typeof bool);
let chgBool = String(bool);
console.log(typeof chgBool);
// IMP = convert the null value to string:
console.log(typeof String(null));
// IMP = convert the undefined value to string:
console.log(typeof String(undefined));

// => here we see the method (toString):
// it has few things which are different than (String) function:
// -> 1 = one is its (syntax):
// -> 2 = second it did not change all the values into (string) data-types:it cannot convert (null) and (undefined) values to a string.
// IMP = here we convert the number to string:with the help of (toString) method:
let num1 = 123;
let str2 = num.toString();
console.log(typeof str2);
// IMP = here we see that it did not change the data-type of (null) and (undefined) values to string data-type:this will through us the (error):
// console.log(null.toString());

console.log("*** number conversion***");

// => second = convert any data-type to (number):
// IMP = we have four-ways to do this of type conversion:
// 1 = Number():
// first we see the workig of Number() method:
// -> convert number-string to number :
let Num = "25";
console.log(Number(Num));
// -> convert simple-string to number:
// IMP = instead of number-string if we only have the string:then what will be the answer of that string.if try to convert it into the number through (Number) method:
// IMP = then in result we will have the (NaN):NaN is basically used to repersents the (Not a number)  value in js:
console.log(Number("value"));
// -> convert boolean-value to number:
// IMP = here in result we will have the (1):because in bitwise system (1) respersents the (true) value:
console.log(Number(true));
// 2 = Unary (+) plus-operator ---(works on varaibles):
// 3 = parseFloat():
// 4 = parseInt():
