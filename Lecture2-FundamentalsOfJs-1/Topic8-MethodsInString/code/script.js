console.log("Methods of Wrapper Objects for String");
let str1 = "javascript is wonderfull";
let str2 = ".And I am Happy to learn in it:"
console.log(str1.__proto__);

// => methods of strings wrapper-object:here we only see the more usable-one:
// V.IMP = methods are functions:so we have call them.if we wanna use them:
// => 1 = first method is (charAt):It use to get the particular character from the string:be can do that by defining the (index) number of the string's character to it:
console.log(str1.charAt(4));
// => 2 = second method is (concat):it is use to combine the two-strings into the one-string:
let comb = str1.concat(str2);
console.log(comb);
// => 3 = third methid is (indexOf):it is used to get the index-number of particular character from the string:
// IMP = this method will only return us the index-number of the (character) which basically appears first in the string:
console.log(str2.indexOf("H"));
// IMP = we can also find out the index-number of (subStrings):
// this will only proivde us the index-number of subStrings first-character:
console.log(str2.indexOf("am"));
// IMP = we can also provide him the index-number as second-argument in the method:To start seaching for the particular character from that index-number in the hole-string:
console.log(str2.indexOf('y',10));
// => 4 = fourth method is (lastIndexOf):It is used to find-out the last apperance of the particular-character in the hole-string:
console.log('lastIndexof:-(i) is ',str2.lastIndexOf('i'));




// => properties of string wrapper-object:here we only see the more usable-one:
// V.IMP = properties are simple collection of key-value pairs:so that's why we did not have to call them:we can simply use them: 
// => 1 = first property is (length): it is used to get or count the number of characters were presents in the particular string:
console.log(str2.length);
