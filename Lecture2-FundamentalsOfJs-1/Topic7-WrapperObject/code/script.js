console.log('Learning about Wrapper-Object ');
// IMP-NOTE: everything in javascript is actucally an object: 
// IMP = So,because of this note:everything that we created have using the primitive data-types:have there own wrapper-objects:
// this wrapper-object:actucally has been created in the backend.when-ever we create any variable using primitive data-types:
// IMP = and because off that we can use the multiple (methods) of the objects or wrapper-objects on our primitve data-type (values):and this help us to do multiple things with our primitive data-type (values):
// Like(for-example):we can manipulate or convert our number (value) of primitive data-type to string primitive data-type (value) by simply using the (toString) method of wrapper-object on it:
// IMP = javaScript provides three primitive wrapper types: Boolean, Number, and String types.only the (null) and (undefined) primitive data-type (values) did not have the (wrapper-object) on them:

let num = 10;
let str = 'harish';
let bigNum = 10n;
let bool = true;

console.log(num.__proto__);
console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);