// Here we gonna be learn about (Comparison-Operator):
console.log("Learning About Comparison Operator");

// => 1 = Comparison-Operator:(>,<,<=,>=,==,!=,===,!==):

// V.IMP = comparison-operators basically return us the boolean-values:These operators compare two values and return a boolean value (true or false) to us  based on there comparison-result:

// V.IMP = the two of these comparison operators:you will only be find in the javascript language(===,!==):
// -> (===) = strict-equality(comparison)-operator:
// -> (!==) = strict-inequality(comparison)-operator:

// => here gonna check them one by one:
// => 1 = (==): Its known as (equality) operator:It compares the values of two operands for equality but without any type conversion. It returns true if the values are equal and have the same type or same (data-type):
console.log(5 == 5);
// => 2 = (!=):  Its known as (inequality) operator:It compares the values of two operands for inequality but without any type conversion. It returns true if the values are not equal and have the same type or same (data-type):
console.log(5 != 6);
// => 3 = (<): Its known as (less-than) operator:It compares the values of two operands and returns true if the value of the left operand is less than the value of the right operand:
console.log(5 < 6);
// => 4 = (>): Its known as (greater-than) operator:It compares the values of two operands and returns true if the value of the left operand is greater than the value of the right operand:
console.log(6 > 5);
// => 5 = (<=): Its known as (less-than-equal-to) operator:It compares the values of two operands and returns true if the value of the left operand is less than or equal to the value of the right operand:
console.log(5 <= 5);
//  => 6 = (>=): Its known as (greater-than-equal-to) operator:It compares the values of two operands and returns true if the value of the left operand is greater than or equal to the value of the right operand:
console.log(5 >= 5);

// V.IMP = other comparison operators:which we only find in the javascript language(===,!==):
// 1 = (===): strict-equality(comparison)-operator:It compares the values of two operands for equality and returns true if the values are equal and have the same type or same (data-type):
// IMP = here we use simple (equality) operator:to check (5) with numerical value and ('5') of string:then we gonna get the output as (true):but its not ture:
console.log(5 == "5");
// but if we use the (strict) equality operator:then it gonna return us the (false) result:because (strict) operator not only check the (values) it also check there (data-types):
console.log(5 === "5");

// 2 = (!==): strict-inequality(comparison)-operator:It compares the values of two operands for inequality and returns true if the values are not equal and have the same type or same (data-type):
// IMP = same thing happen in the (strict-inequality) operator:
// -> check for (inequality) operator:
console.log(5 != "5");

// -> check for (strict-inequality) operator:
console.log(5 !== 5);
