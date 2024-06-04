console.log("Learn about Operator in js");
// Operators in js:operators are special symbols that perform operations on values (operands). These operations can be anything from basic arithmetic calculations to complex comparisons and data manipulations. They're fundamental building blocks for writing JavaScript code as they control the flow and processing of data with in your program:
// Operators are mainly of five types:
// 1 = Arithematic Operators:(+,-,*,/,%,**,++,--)
// 2 = Assignment Operators:(=,+=,-=,*=,/=,%=,**=)
// 3 = Comparison Operators:(>,<,<=,>=,==,!=,===,!==)
// 4 = Logical Operators:(&&,||,!)
// 5 = Bitwise Operators:(&,|,^,~,<<,>>,>>> )

// => here in this topic we gonna be learn about:these operators:
// 1 = Assignment Operators:
// 2 = Arithematic Operators:
// 3 = more Arithematic Operators:
// 4 = Augmented Assignment Operators:

// => 1 = Assignment Operators:(=,+=,-=,*=,/=,%=,**==):these operators are used to assign a value to the variable:
 
// IMP = these Assignment-operators baiscally work from (right) to (left) not from (left) to (right) other then like other operators:and it called (associativity):
// In associativity.first the values get resolved.and then they get assigned to its variable:

// => Basic Assignment operator:
let a = 10;
// IMP = example of associativity:
// -> In this equation or variable:we can see that because of its (right) to (left) associativity:first (a) get resolved and after that its value get assigned to the (b) variable:
let b = a;
// -> because of its Associativity:we can also assign the one value to multiple variables in one-equation or one-variable declaration:
let c = a = 20;

console.log(a);
console.log(b);
console.log(c);


// => other Assignment Operators:which are known as (Augmented) assignment operators:
// -> addition assignment:
let d = 5;
d += 2;
console.log(d);
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
console.log(10+2);
// -> substraction Arithematic operator:
console.log(10-2);
// -> multiplication Arithematic operator:
console.log(10*2);
// -> division Arithematic operator
console.log(10/2);
// -> modulus or Remainder Arithematic operator:
console.log(10%2);

// => more or other Arithematic operators:(++,--,+,-,**):
// -> Increment Arithematic operator:(++):
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
// -> that's why if we direclty use this operator type in console-statement:To increase our value:then we are not gonna be able to that:because at that time our value is not gets (increased):so it gonna be print the same value as our varaible have:
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







