// here we gonna be learn about (Logical-Operators):
console.log("Learning about Logical Operators");
// => 1 = Logical-Operator:(&&,||,!):these operators basically help to perform logical-operations on multiple boolean-values at once and return the another boolean value as a result to us:In simple-way logical-operators are used for checking and comparing the multiple boolean values and get some result from them:

// V.IMP-NOTE = Mostly these logical-operators are used with (statement-conditions) or decision-making scenarios(if,loops and etc):those are basically gonna gave us the result in the form of (boolean-values):because with the help of it we can check and compare those statement-conditions or decision-making scenarios and get some result or logic from them with the help of logical-operators:

// V.IMP = but the more important is that we can also use the (non-boolean) values.which are the (truthy) and (false) values with in the (logical-operators):
// -> Truthy-values or primitive and non-primitive values:non-empty strings, non-zero numbers, and objects:
// -> Falsy-values:false, 0, null, undefined, NaN, and "" (empty string):
// V.IMP-(NOTE): with boolean-value's (conditions) and (statements) logical-operators work differently as if we compare it to the truthy,falsy (conditions) and (statements) values:

// Some of the Logical-Operators are:mainly there we have three types of Logical-Operators:(&&,||,!);
// -> first = (&&)-Logical (AND) operator:
// -> second = (||)-Logical (OR) operator:
// -> third = (!)-Logical (NOT) operator:

// -> 1 =  (&&)-Logical (AND) operator:It is used to check and compare multiple boolean-values:if both of them are (true) then it will return us the (true) value as result: otherwise it will return us the (false) value as result:but it works differently with (truthy) and (falsy) values:

// -> 2 = (||)-Logical (OR) operator:It is used to check and compare multiple (boolean) values:if one of them is (true) then it will return us the (true) value as result: otherwise it will return us the (false) value as result:it also works differently with the (truthy) and (falsy) values:

// -> 3 = (!)-Logical (NOT) operator:It is used to check and compare one or multiple (boolean) values:if those values are (true) then it will return us the (false) value as result: otherwise it will return us the (true) value as result:it also works differently with the (truthy) and (falsy) values:
// IMP = as per its same says it represents (not):The Logical NOT (!) operator is used to reverse or negate a boolean value:
// -> like: if (a) is (true) then (!a) will be (false) and if (a) is (false) then (!a) will be (true):

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