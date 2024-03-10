console.log("learning about type-coercion");
// Type-Coercion:
// IMP = here we will see that how the (arithmetic-operators).work with the (strings) in the javascript:

// => 1 = first we use the (add) arithmetic-operator on both the number:
console.log(5 + 5);
// => 2 = second we use (add) arithmetic-operator on two things:
// first is the string-value:
// second is the number-value:
// IMP = when we try to add them both.then it will provide us result in the form of that two-things combination:not in the form of two-values (addition):
// V.V.IMP = and also its in the form of (string):whenever we try to use the (add) arithmetic-operators with (string) and (number) values:then we will have the result in the form of (string) data-type:
let num = "5" + 5;
console.log(num);
console.log(typeof num);
// => 3 = we can also use the (two) and more string-values with the  arithmetic-operators:
// V.V.IMP = when we use the (add) arithmetic-operator:on multiple string-vlaues.then we will get the result in the form of (string) data-type:
let fullName = "harish" +" "+"kumar";
console.log(fullName);
console.log(typeof fullName);

// V.IMP = here we see that:how the (subtraction) arithmetic-operator:work with the one (string) and (number) value:
// V.V.IMP = we will have the result in the form of (number) data-type:and also the result-value is in the form of subtraction-value not in the form of  combination  that we have seen in the addition arithmetic-operator:
let subtraction = '55' - 10;
console.log(subtraction);
console.log(typeof(subtraction));

// IMP = same thing will happen to the other arithmetic-operators:which has happened to the subtraction arithmetic-operator with the string-values:
let multiple = '55'*10;
console.log(multiple);
console.log(typeof multiple);