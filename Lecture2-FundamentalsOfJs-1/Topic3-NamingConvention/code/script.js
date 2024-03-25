console.log("learning about naming convention in js");
// Naming Convention:
// ● Variable names can contain letters(aA-zZ), digits, underscores, and dollar signs.
// ● A variable name must begin with a letter, underscore, or dollar sign.not with a (numbers):
// ● Variable names are case-sensitive.
// ● It is recommended to avoid using reserved keywords as variable names such as var, let, const, function, return, etc.

/* Rules and Naming Conventions*/

// => here we learn about some rules related to variable declaration in js:
// => 1 = case sensitive:It means that (Year) name with (capital) letter (Y) does not same as the (year) name with (small) letter (y) in (js):
let year = 2000;
let Year = 2030;
// => 2 = variable names can contains letters(Alhphabets(aA-zZ)),numbers(digits),underScore(_),Dollar-Sign($);
let name = "harish";
let first_name = "harish";
let amt$ = 20.5;
let num1 = 10;
// => 3 = Cannot start with a number:
// let 1num = 10;
// => 4 = No Reserved Keywords:means the words which are already used by the language it self:we cannot use them in variable declaration:
// -> we can see here that we can not use the (let) keyword as our variable:because the (let) keyword is also used by the language it self:
// let let = 10;
// => 5 = No Blank Spaces in between:
// let birth data = 10;
// => 6 = under 10 or 15 characters:there is no limitation of using (numbers) in variable declarations:but for partical reason it is good if we use only 10 or 15 number characters in variable declaration:
// => 7 = Variable names  should always exist on the left hand:
// -> right way:
let a = 10;
// -> wrong way:
// let 10 = b;


// => here we learn about naming conventions or systems which related to the variable declaration in js:
// most commonly used naming conventions:
// -> first is camel-casing:This means starting with a lowercase letter and capitalising the first letter of each subsequent word. For example, firstName, totalSales,employeeSalary:
// -> second is snake-casing:When writing in "snake case," the initial letter of each word is written in lowercase, and each space is substituted with the underscore (_) character. For example: first_child_age.
// IMP = we mostly use camel-casing:
let firstChildAge = 10;
// here we have example of (snake-casing):
let first_child_age = 10;
