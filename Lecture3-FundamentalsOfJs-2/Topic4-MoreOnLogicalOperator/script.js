console.log("Learning More About Logical Operator");
// => (second) = here we gonna be learn about using logical operator with the non-boolean-values or we can say with the (truthy) and (falsy) values:
// V.IMP-NOTE:truthy and falsy values can  also be called as primitive and non-primitive values:and it only happens or works in the js:
// -> Truthy-values:true,non-empty strings, non-zero numbers, and objects:
// -> Falsy-values:false, 0, null, undefined, NaN, and "" (empty string):

// => V.IMP-NOTE:We are able to use logical operator with the (truthy) and (falsy) values: because every-value in nodejs lies under the category of (truthy) and (falsy) values:It only happens in the js:
// -> As per there name-says that:
// Truthy-value -> Means (true):
// Falsy-value -> Means (false):

// => V.IMP-NOTE:but the more important thing is that:which we have to learn here is that:if we use logical operator with the (truthy) and (falsy) values:then how the logic behind it is working that we are getting the result in the form of (truthy) and (falsy) values as well not in (boolean-values):
// We have to Learn that how we are able to define that which value is gonna be our result:

// Working-Explanation:Related to Logical-operators working with the (truthy) and (falsy) values:
// -> (&&) - AND-Operator:
// -> (||) - OR-Operator:
// -> (!) - NOT-Operator:

// => AND-Operator:
// -> The && operator evaluates expressions from left to right.
// -> It returns the first falsy value it encounters or sees.and stop checking further-values:
// -> If all values are truthy, it returns the last-truthy value.
console.log("harish" && "kumar" && 0 && 1);

// => OR-Operator:
// -> The || operator evaluates expressions from left to right.
// -> It returns the first truthy value it sees or if its present.and stop checking further-values:
// -> If all values are falsy, it returns the last-falsy value.
console.log("harish" || "kumar" || 0 || 1);

// => NOT-Operator:
// -> The ! operator returns the opposite of its operand.
// -> If the operand is truthy, it returns false.
// -> If the operand is falsy, it returns true.
console.log(!0);
console.log(!"harish");