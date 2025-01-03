console.log("Learn about Operator in js");
// Operators in js:operators are special symbols or keywords that perform operations (actions,workings) on values (operands). These operations can be anything from basic arithmetic calculations to complex comparisons and data manipulations.
// They're fundamental building blocks for writing JavaScript code as they control the flow and processing of data with in your program:
// => Operators are mainly of five types:
// 1 = Arithmetic Operators:(+,-,*,/,%,**,++,--)
// 2 = Assignment Operators:(=,+=,-=,*=,/=,%=,**=)
// 3 = Comparison Operators:(>,<,<=,>=,==,!=,===,!==)
// 4 = Logical Operators:(&&,||,!)
// 5 = Bitwise Operators:(&,|,^,~,<<,>>,>>>)

// => here in this topic we have learn about:these operators:
// 1 = Assignment Operators:
// 2 = Arithematic Operators:
// 3 = more Arithematic Operators:
// 4 = Augmented Assignment Operators:

// => 1 = Assignment Operators:(=,+=,-=,*=,/=,%=,**==):these operators are used to assign a value to the variable:

// IMP = these Assignment-operators baiscally work from (right) to (left) not from (left) to (right) other then like other operators:and it called (associativity):
// V.V.IMP = In associativity.first the values get resolved.and then they get assigned to its variable:

// => Basic Assignment operator:
let a = 10;
// IMP = example of associativity:
// -> In this equation or variable:we can see that because of its (right) to (left) associativity:first (a) get resolved and after that its value get assigned to the (b) variable:
let b = a;

// -> because of its Associativity-working process:we can also assign the one value to multiple variables in one-equation or one-variable declaration:
let c = (a = 20);

console.log(a);
console.log(b);
console.log(c);

// => 4 = other Assignment-Operators:which are known as (Augmented) assignment operators:
// -> addition assignment:
let d = 5;
d += 2;
console.log(d);
// V.V.IMP = all the other augmented assignment type operators works in the same way as (addition) augmented assignment operator:
// -> substraction assignment:
let e = 5;
e -= 2;
console.log(e);
// -> multiplication assignment:
let multi = 5;
multi *= 2;
console.log(multi);
// -> division assignment:
let f = 5;
f /= 2;
console.log(f);
// -> modulus assignment:
let g = 5;
g %= 2;
console.log(g);
// -> exponent or power assignment:
let h = 5;
h **= 2;
// here we are doing the (raise to the power):
console.log(h);

// => 2 = Arithematic Operators:(+,-,*,/,%):These operators perform basic arithmetic operations on numerical values:
// => Basic Arithematic operators:(+,-,*,/,%)
// -> addition Arithematic operator:
console.log(10 + 2);
// -> substraction Arithematic operator:
console.log(10 - 2);
// -> multiplication Arithematic operator:
console.log(10 * 2);
// -> division Arithematic operator
console.log(10 / 2);
// -> modulus or Remainder Arithematic operator:
console.log(10 % 2);

// => 3 = more or other Arithematic operators:(++,--,+,-,**):

// => 1 =  Increment Arithematic operator:(++):
let x = 10;
// IMP = one way to do addition on varaible values:with the help of addition arithematic operator:but method is used when we wanna increase the value of varaible by a particular number not by a one:
// x = x+1;
// IMP = and other way is increment-operator:which does the same thing but in simple manner:
x++;
console.log(x);

// => It also have types in it:or we can say that we can declare it in two ways or it works in two ways:
// -> Post-Increment Operator:
// -> Pre-Increment Operator:

// (Post-Increment) operator:which we commonly used in increment operations:
// -> As per its name says Post-increment:it basically increase the value by one (after) our (expression) or (line of code) gets (executed):or we can say in next line of our code.because In that line of code (y) variable comes first that's why it gets (executed) first:and then after that its value gets increase by (one):
// -> that's why if we direclty use this operator type in console-statement:To increase our value:then we are not gonna be able to do that:because at that time our value is not gets (increased):so it gonna be print the same value as our varaible have:
let y = 1;
// here (y) variable's value will be remain same:
console.log(y++);
// but here it will be increased by one:
console.log(y);
// (Pre-Increment) Operator:
// -> As per its name says pre-increment:it basically increase the value by one (before) our (expression) or line of code gets (executed):or we can say in the same line of our code.because In that line of code (++) increment-operator gets first and then after that we are  having the variable :
// -> that's why if we directly use this operator type in console-statement:To increase our value:then we are gonna be able to do that:because at that time our value is already gets increased:so it gonna be print the increment value of variable:
let z = 1;
console.log(++z);
console.log(z);

// => 2 =  decrement Arithematic operator:(--):
// IMP = one way to do substraction on varaible values:with the help of substraction arithematic operator:but method is used when we wanna decrease the value of varaible by a particular number not by a one:
let i = 10;
i = i - 1;
// IMP = and other way is decrement-operator:which does the same thing but in simple manner:
i--;
console.log("decrement arithmatic operator", i);

// => It also have types in it:or we can say that we can declare it in two ways or it works in two ways:
// -> Post-decrement Operator:
// -> Pre-decrement Operator:

// (Post-decrement) operator:which we commonly used in decrement operations:its also works in same way as (Post-increment) operator:but only the difference is that it decrease the value by one (after) our (expression) or (line of code) gets (executed):or we can say in next line of our code.because In that line of code (y) variable comes first that's why it gets (executed) first:and then after that its value gets decrease by (one):
let j = 1;
j = j++;
console.log(j);
// (Pre-decrement) Operator:its also works in the same way as (Pre-increment) operator:but only the difference is that it decrease the value by one (before) our (expression) or line of code gets (executed):or we can say in the same line of our code.because In that line of code (--) decrement-operator gets first and then after that we are  having the variable :
let k = 1;
k = --k;
console.log(k);

// => 3 = Unary-Plus:(+):It basically help us to add the positive-sign in front of the number:It does not do anything
let l = +10;
console.log(l);

// V.V.IMP = unary plus operator will get us the same result as (number-method) for all the conversions which be have did with the help of (number-method):so when we use it before a value: then it will attempt to convert that value into a number or number (data-type):
let ak = +'090909';
console.log(typeof ak) 


// => 4 = Unary-Minus:(-):It basically help us to add the negative-sign in front of the number:
let m = -10;
console.log(m);



// => 5 = Exponent:(**):It help us to gave the (raise to the power) value to the (numerical-value):
// -> exponent or power assignment:
let n = 5;
n **= 2;
// here we are doing the (raise to the power):
console.log(n);
