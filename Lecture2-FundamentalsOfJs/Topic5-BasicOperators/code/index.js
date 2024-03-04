// Operators in javascript:
// => 1 = (Arithemetic)-operators:These operators perform basic arithmetic operations on numerical values.
// here we have Arithmetic-operators: (+,-,*,/,%,**,++,--)
console.log(3 + 5);
console.log(5 - 2);
console.log(5 * 3);
// IMP = divison operator basically proivde us the (quotient) in the result:
console.log(4 / 2);
// IMP = modulus operator basically provide us the (remainder) in the result:
console.log(4 % 2);
// IMP = (**) this is know as (exponent) operator:it is used to  (solve) the (power) values:
console.log(2 ** 4);
// IMP = (++) this is know as increment operator. They are used to increase the value of a variable by (1):
let x = 10;
x++; // X=X+1;
console.log(x);
// IMP = (--) this is know as decrement operator:they are used to decrease the value of a variable by (1):
let y = 10;
y--; //y=y-1;
console.log(y);

// => 2 = Assignment-Operators:These operators are used to assign a value to a variable.
// here we have Assignment-operators:(=,+=,-=,*=,/=,%=,**==)
// IMP = here we are assigning the value to the variable with the  help of (=) equalto which is basically a  (Assignment) operator:
let a = 2;
// IMP = In this way all the other assignment operators work:
let b = 5;
b += 2;
console.log(b);

let c = 5;
c -= 2;
console.log(c);
let multi = 5;
multi *= 2;
console.log(multi);
let d = 5;
d /= 2;
console.log(d);
let e = 5;
e %= 2;
console.log(e);
let f = 5;
f **= 2;
console.log(f);
// => 3 = Comparison-Operators:
// here we have some comparison operators:(>,<,<=,>=,==,!=,===,!==)
// IMP = two these comparison operators:you will be only find in the javascript language(===,!==):
// IMP = comparison-operators basically return us the boolean values:These operators compare two values and return a boolean value (true or false) to us  based on the comparison result.

console.log(5>2);
console.log(5<2);
console.log(5>=2);
console.log(5<=2);
console.log(5==2);
console.log(5!=2);
// V.IMP = js also have some flows or errors in it:
// To solve this problem: we have two more comparison operator in the js:
console.log(5=='5');
// IMP = Two only found comparison operators in javascript:(===,!==)
// 1 = (===) strict-equality-operator:The === (strict equality operator) also compares the values of two operands for equality but without any type conversion. It returns true if the values are equal and have the same type or same (data-type).
console.log(5==='5');
// 2 = (!==) strict-inequality-operator:
console.log(5!='5');
console.log(5!=='5');


// => 4 = Logical-operator:
// here we have some Logical-operators:(&&,||,!)

