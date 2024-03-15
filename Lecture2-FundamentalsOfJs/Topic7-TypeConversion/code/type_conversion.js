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
// first we see the working of Number() method:
// -> convert number-string to number :
let Num = "25";
console.log(Number(Num));
// -> convert simple-string to number:
// IMP = instead of number-string if we only have the string:then what will be the answer of that string.if try to convert it into the number through (Number) method:
// IMP = then in result we will have the (NaN):NaN is basically used to repersents the (Not a number)  value in js:
console.log(Number("value"));
// -> convert boolean-value to number:
// IMP = here in result we will have the (1):because in bitwise system (1) respersents the (true) value and (0) repersents the (false) value:
console.log(Number(true));
// 2 = Unary (+) plus or addition-operator ---(works on varaibles):
// second we see the working of unary (+) plus or addition-operator method:
// IMP = In JavaScript, the unary ‘+’ operator can be used to convert a value to a number. When used before a value, it attempts to convert the value to a number type.
// -> convert number-string into the number:
let a = "123";
console.log(+a);
// -> convert simple-string into the number:
let b = "harish";
console.log(+b);
// -> convert boolean-value into the number:
let c = true;
console.log(+c);

// V.IMP = every (integer) or (floating-point) value is considered as (number) or (number) data-type in javascript:
// 3 = parseInt():
// -> converting the number-string into the number:
console.log(parseInt("12345"));
// -> IMP = parseInt-method is different from the (number) method:because the number-method is not able to convert the string with number and character values into the number:it will gave us the result in (NaN) value:
// => 1 = parseInt-method:basically provide the result of string-value in number-value:only even if we have the character-values after the number-values:
console.log(parseInt("12345f"));
// => 2 = if we have the character-values:before the (number-value) in the string:
// then we will have the same result as (number) method for the (simple-string) value:and that is (NaN):
console.log(parseInt("f12345"));

// 4 = parseFloat():
// -> convert the floating-Number-string into the number:
console.log(parseFloat('123.45'));
// -> IMP =  same thing will happen here in (parsefloat) as (parseInt) for all the conversions:
// only difference is that here we use the floating-point number:
console.log(parseFloat('123.45f'));
console.log(parseFloat('f123.45'));

// 5 = Boolean():
// here we see the conversion from (boolean) values to (number-values):



