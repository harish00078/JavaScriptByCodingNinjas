// here we gonna be learn about (Logical-Operators):
console.log("Learning about Logical Operators");
// => 1 = Logical-Operator:(&&,||,!):these operators perform logical operations on multiple boolean values at once and return the another boolean value as a result to us:after checking and comparing all those multiple boolean values:
// IMP = In more simpler way:when we have to (check) and (compare) more then one (boolean-values) and (conditions) or(statements) which gave us the result in the form of (boolean-value):then we use the (Logical-Operators) in the javascript:
// V.IMP = but the more important is that we can also use the (non-boolean) values.which are the (truthy) and (false) values with in the (logical-operators):
// -> Truthy-values:non-empty strings, non-zero numbers, and objects:
// -> Falsy-values:false, 0, null, undefined, NaN, and "" (empty string):
// V.IMP-(NOTE): with boolean-value's (conditions) and (statements) logical-operators work differently as if we compare it to the truthy,falsy (conditions) and (statements) values:

// Some of the Logical-Operators are:mainly there we have three types of Logical-Operators:(&&,||,!);
// -> first = (&&)-Logical (AND) operator:
// -> second = (||)-Logical (OR) operator:
// -> third = (!)-Logical (NOT) operator:

// -> 1 =  (&&)-Logical (AND) operator:It is used to check and compare multiple boolean-values:if both of them are (true) then it will return us the (true) value as result: otherwise it will return us the (false) value as result:but it works differently with (truthy) and (falsy) values:

// -> 2 = (||)-Logical (OR) operator:It is used to check and compare multiple (boolean) values:if one of them is (true) then it will return us the (true) value as result: otherwise it will return us the (false) value as result:it also works differently with the (truthy) and (falsy) values:

// -> 3 = (!)-Logical (NOT) operator:It is used to check and compare one or multiple (boolean) values:if those values are (true) then it will return us the (false) value as result: otherwise it will return us the (true) value as result:it also works differently with the (truthy) and (falsy) values:
// IMP = as per its same says it represents (not):like this value is not (true) then it will return us the (false) value as result:otherwise it will return us the (true) value as result:

// V.IMP = As we have learned that (logical-operator):works differently with (boolean-values) if we compare it with the (truthy) and (falsy) values:

// => (first) = here we are using logical operator with the boolean-values:
// -> (&&) -Logical (AND) operator:
let grade = 60;
let scholarship = 80;
let eligible = grade > 60 && scholarship > 80;
console.log(eligible);

// -> (||) -Logical (OR) operator:
let m1 = 55;
let m2 = 55;
let m5 = 45;
let eligibility = m1 > 50 || m2 > 50 || m5 > 50;
console.log(eligibility);

// -> (!) -Logical (NOT) operator:
let rightToVote = false;
console.log('Not-Logical-operator',!rightToVote);

// => (second) = here we are using logical operator with the non-boolean-values or we can say the (truthy) and (falsy) values: