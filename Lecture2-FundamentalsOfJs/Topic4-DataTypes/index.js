// In javascript data-types are broadly classified into the following two categories:
// first is (Primitive-data-types):
// second is (Object-data-types):
// IMP-NOTE:(typeof) operator:In JavaScript, the typeof operator can be used to determine the data-type of a (variable) or its (value):

// => 1 = Primitive data-types:these basic data-types repersent a (single-value).javascript has seven primitive data-types:
// 1 = (number):represents both integer and floating-point numbers in JavaScript.
let num = 10;
console.log(typeof num);
// 2 = (string):represents textual data in JavaScript and can be enclosed in single quotes, double quotes, or backticks. In JavaScript, there are several ways to represent strings:
// => first we use (single-quotes) way:
const firstName = 'harish';
// IMP = if we wanna use the ('s) in our string:then we have to  use double-quotes.because we are using the single-quotes in the ('s) express:
const firstName1 = "harish's boss";
// => second we use (double-quotes) way:
const lastName = "kumar";
// IMP = if we wanna use the ("s) in our string:then we have to  use single-quotes.because we are using the double-quotes in the ("s) express:
const lastName1 = 'kumar"s boss';
// => third we use Template (literals) or(backticks):
const gender = `male`;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof gender);
// 3 = boolean:represents a logical value, which can be either true or false.
const bool = false;
console.log(typeof bool);
// 4 = null:represents the intentional absence of any object value:
// IMP = In JavaScript null is "nothing". It is supposed to be something that doesn't exist. 
// V.IMP = Unfortunately, in JavaScript, the data type of null is an object.
// this is basically a bug in javascript:that (null) is a (Object):
const b = null;
console.log(typeof b);
console.log(b);
// 5 = undefined:represents a variable that has been declared but has not been assigned a value.
let a;
console.log(typeof a);
// 6 = bigint:represents integers with arbitrary precision. These values usually have ‘n’ at the end of the number. For example: let num = 10n; Here, num is of bigint data type:
let num1 = 10n;
console.log(typeof num1);
// 7 = symbol:: represents a unique value that can be used as a key for object properties.

// => 2 = second is (Object-data-types):An object is a non-primitive data type representing a collection of related properties and methods. It can be thought of as a container for related data and behaviour, similar to an object in the real world.