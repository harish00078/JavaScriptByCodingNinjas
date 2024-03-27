// ● let and const are two new methods for declaring variables in JavaScript that were added to ES6. The var keyword was the sole way to declare a variable prior to this introduction.
// => 1 = there are three ways of declaring variables:
// first is (let):
// second is (const):
// third is (var):

// => first here I have created the variable:with the help of (let) keyword:or we can also say that here we are declaring the variable:
// let and const are more strict than var. Variables declared using let can be reassigned values similar to the var declarations.
let age;
// and here we are assinging the value to this variable:or we can also call it that here we are giving the (defination) to the variable:
age = 13;
// Variables defined by let can not be redeclared but can be reassigned but can be redeclared:
let x = 8;
x = 16;
console.log(x);
// => second here i have created the variable:with the help of (const) keyword:
// IMP = const-keyword is the most strict of the three:when a variable is declared with const,it cannot be (reassigned) to a new-value:
// most used to create variables:whose values we did not want to change in anywhere of our program:for-example:
// => if we want to store the date-of-birth of the particular person:or if we want to use the  any particular value of the maths:
const pi = 3.14;
// IMP = another important thing is that (const) keyword:does not allow us to define a value to the (const) variable:after declaring it.we have define the value for it infront of it after its declaration:


// => third here i have created the variable:with the help of (var) keyword:
// var is the least strict of the three, allowing reassigning values to the variable. This declaration can lead to unexpected results and is generally considered bad practice, so it is rarely used:
var myName = 'harish';
myName = 'Boss';

