console.log("js fundamentals");
// IMP = Variables in JS are dynamically typed, i.e., The variables do not have any type, but the values have type, and we can reassign values to them at runtime.
// IMP = there are three way to declare variables in the javascripts:
// first is (let):
// second is (const):
// third is (var):

// here we can see the (let) keyword to declare variable:
let age = 10;
console.log(age);
// here we are changing the value of same(age) variable from (number) to (string):
// because we know that the Variables in JS are dynamically typed, the variables do not have any type, but the values have type, in javascript.and we can reassign values to them at runtime.
age = "ten";
console.log(age);
// Naming Convention:
// ● Variable names can contain letters, digits, underscores, and dollar signs.
// ● A variable name must begin with a letter, underscore, or dollar sign.
// ● Variable names are case-sensitive.
// ● It is recommended to avoid using reserved keywords as variable names,
// such as var, let, const, function, return, etc.

// most commonly used naming conventions:
// first is camel-casing:This means starting with a lowercase letter and capitalising the first letter of each subsequent word. For example, firstName, totalSales,employeeSalary:
// second is snake-casing:When writing in "snake case," the initial letter of each word is written in lowercase, and each space is substituted with the underscore (_) character. For example: first_child_age.
// IMP = we mostly use camel-casing:
let firstChildAge = 10;
// here we have example of (snake-casing):
let first_child_age = 10;
