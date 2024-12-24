// Operators in javascript:
// => 1 = (Arithmetic)-operators:These operators perform basic arithmetic operations on numerical values.
// here we have Arithmetic-operators: (+,-,*,/,%,**,++,--)
console.log(3 + 5);
console.log(5 - 2);
console.log(5 * 3);
// IMP = division operator basically provide us the (quotient) in the result:
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
// IMP = here we are assigning the value to the variable with the  help of (=) equal which is basically a  (Assignment) operator:
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
// here we are doing the (raise to the power):
console.log(f);
// => 3 = Comparison-Operators:
// here we have some comparison operators:(>,<,<=,>=,==,!=,===,!==)
// IMP = two these comparison operators:you will be only find in the javascript language(===,!==):
// IMP = comparison-operators basically return us the boolean values:These operators compare two values and return a boolean value (true or false) to us  based on the comparison result.

console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 2);
console.log(5 <= 2);
6;
console.log(5 == 2);
console.log(5 != 2);
// V.IMP = js also have some flows or errors in it:
// To solve this problem: we have two more comparison operator in the js:
console.log(5 == "5");
// IMP = Two only found comparison operators in javascript:(===,!==)
// 1 = (===) strict-equality-operator:The === (strict equality operator) also compares the values of two operands for equality but without any type conversion. It returns true if the values are equal and have the same type or same (data-type).
console.log(5 === "5");
// 2 = (!==) strict-inequality-operator:
console.log(5 != "5");
console.log(5 !== "5");

// => 4 = Logical-operator:
// here we have some Logical-operators:(&&,||,!)
// first we see about (AND-operator)=(&&):
console.log(true && true);
// IMP=> 1 = here we also have the result as (1) it means that this is (true):because (1) considered as (truthy) values in js:
console.log(true && 1);
// IMP=> 2 = here we can see that.why we are getting the (1) as result not the (true):In the upper (AND) Operator condition:
// because the (&&) AND-Operator return us the (last) truthy-value as a result from its truthy values:
console.log(5 && 1);
// IMP=> 3 = and In between the falsy values of (AND) operator:It will return us (first-falsy) value:

console.log(0 && "");
// second we see about (OR-operator)=(||):
// IMP=> 1 = It will return us the (first-truthy) value as in (result):from its all (truthy-values):
console.log(5 || 1);
// IMP=> 2 = and It will return us the (last-falsy) value as in (result):from its all (falsy-values):
console.log(0 || "");
// third we see about (NOT-operator)=(!):
console.log(!0);
console.log(!1);

// => 5 = Bitwise Operators:
// here we have some bitwise operators:(&,|,^,~,<<,>>,>>> ):
// IMP = In bitwise operator.we work with the bits means with the (0 and 1):
// In bitwise operator:(0) represents the (false) and (1) represents (true):
// IMP = so when we are using any kind of bitwise operator.we need to convert those bit values into the result.acc to the properties of that particular operator:
// 1 = Bitwise AND(&) operator:
let A = 10; // 1010
let B = 2; // 0010
// IMP - and when we run (&) AND-operator properties on the (bit-values) of these two-variables:we will get the (result):
// 1010 & 0010 = 0010
let result1 = a & b;
console.log(result1);
// 2 = Bitwise OR(|) operator:
let C = 5;
let D = 3;
let result2 = C | D;
console.log(result2);
// 3 = Bitwise XOR(^) operator:
let E = 5;
let F = 3;
let result3 = E ^ F;
console.log(result3);
// 4 = Bitwise NOT(~) operator:
let G = 5; // (binary: 0101)

let result4 = ~G; // result: -6 (binary: 1010)  (Two's complement representation):
console.log(result4);
// 5 = left shift(<<) bitwise operator:
let H = 10; // 1010
// IMP = here In second variable we will basically represents that:how much positions we have shift the bit-values of the first-variable:
let I = 2;
// and after shifting those bits:whatever number we get from those bit-value will  become our result:

let result5 = H << I; //101000
console.log(result5);
// 6 = right shift(>>)bitwise operator:
let J = 10;
let K = 2;
let result6 = J >> K;
console.log(result6);
// 6 = Zero-Fill right shift(>>)bitwise operator:
let L = 10;
let M = 2;
let result7 = L >>> M;
console.log(result7);
