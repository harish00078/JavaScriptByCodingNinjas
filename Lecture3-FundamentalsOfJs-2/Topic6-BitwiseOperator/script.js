/**
 * Bitwise Operators in JavaScript
 *
 * Bitwise operators perform operations at the binary level, working with 32-bit numbers.
 *
 * Key Points:
 * - Operate on 32-bit signed integers
 * - Work with binary representations of numbers
 * - V.IMP: Convert (decimal-numbers) to 32-bit binary internally and Return results back to decimal format:
 *
 * Bit Representation:
 * - 0 represents false
 * - 1 represents true
 *
 *
 * Available Operators:
 * - & (AND)
 * - | (OR)
 * - ~ (NOT) = (Tilde)
 * - ^ (XOR) = (caret)
 * - << (Left Shift)
 * - >> (Right Shift)
 * - >>> (Unsigned Right Shift)
 */

// [ Bitwise AND (&) operator]: compares each bit of two numbers and returns a new bit-number which is going to be the result of the comparison:with in result we gonna have the (number-form) of that (new) bit-number:
// It compares them acc to the (AND) operator-properties which we have learned:where each bit is 1 only if both corresponding bits in the input numbers are (1) otherwise, it's (0):

let a = 5; // 00000000000000000000000000000101
let b = 3; // 00000000000000000000000000000011

let c = a & b; // 00000000000000000000000000000001

console.log(c); // 1

// [Bitwise OR (|) operator]: compares each bit of two numbers and returns a new bit-number which is going to be the result of the comparison:
// It compares them acc to the (OR) operator-properties:where each bit is (1) if at least one of the corresponding bits in the input numbers is (1) otherwise, it's (0):
let d = 5; // 00000000000000000000000000000101
let e = 3; // 00000000000000000000000000000011

let f = a | b; // 00000000000000000000000000000111

console.log(f); // 7

// [Bitwise NOT (~) operator]:It works in same way as properties of the (NOT) operator:but instead changing (true) to (false):It basically inverts or change all bits of a number, changing 1s to 0s and 0s to 1s.
// It's also known as the complement-operator: because in some of the languages (~) symbol or (bitwise not operator) is called the (complement-operator), because it inverts or changes all the bits of a number:
// Important: The result is the two's complement of the number (inverts bits and adds 1):this (2's complement) term refers to a mathematical-method to represent negative-numbers in binary.

let g = 5; // 00000000000000000000000000000101
let h = ~g; // 11111111111111111111111111111010

console.log(h); // -6

// Explanation:
// Original number (5):  00000000000000000000000000000101
// After NOT operation: 11111111111111111111111111111010
// This represents -6 in two's complement form:
// IMP-NOTE:Two's complement is how negative values are stored and calculated in binary.It’s not just a programming trick — it’s a mathematical system used in computer hardware:

// [Bitwise XOR (^) operator]: compares each bit of two numbers and returns a new bit-number which is going to be the result of the comparison:
// It compares them acc to the (XOR) operator-properties:where each bit is (1) if only one of the corresponding bits in the input numbers is (1) otherwise, it's (0):
// IMP:if both bits are (1) or both are (0):it returns (0):
let i = 5; // 00000000000000000000000000000101
let j = 3; // 00000000000000000000000000000011
let k = i ^ j; // 00000000000000000000000000000110
console.log(k); // 6

// [Bitwise Left Shift (<<) operator]:It shifts the bits of a number to the left by a specified-number of positions:
// IMP:It does not shift the one-bit basically:its gonna shift all the bits acc to the number which be provide to the left-shift operator:
// => Mathematically-explanation:For easy To get answers:
// For example, shifting left by 2 positions (<<2) is equivalent to multiplying by 2^2=4.
// So 5<<2 means 5 * (2^2) = 5 * 4 = 20. Each shift left effectively doubles the number.
// This is why left shift is often used as a fast way to multiply numbers by powers of 2.

// => Shifting Explanation:
// x << 1 = x * 2
// x << 2 = x * 2 * 2 = x * 4
// x << 3 = x * 8
// => In short, x << n = x * 2^n:
// 5 << 2 === 5 * 4 === 20

let l = 5; // 00000000000000000000000000000101
let m = l << 2; // 00000000000000000000000000010100
console.log(m); // 20

// [Bitwise right shift (>>) operator]:It shifts the bits of a number to the right by a specified-number of positions:shift them acc to the number which provide to the (right-shift) bitwise-operator:
// IMP:It does not shift the one-bit basically:its gonna shift all the bits acc to the number which be provide to the right-shift operator:same as hte left-shift operator:
// IMPORTANT NOTE: When performing right shift operations on negative numbers, the sign bit (leftmost bit) is preserved and copied into the positions that are vacated during the shift. This means the result remains negative. This is called arithmetic right shift, which preserves the sign of the number.
// For example, when shifting -5 right by 2 positions, the two leftmost 1s (sign bits) are preserved,maintaining the negative value in the result.

// -> Work Negative-Value:
let n = -5; // 00000000000000000000000000000101
let o = n >> 2; // 00000000000000000000000000000001
console.log(o,'O'); // 1
// -> Work Positive-Value:
let p = 5; // 00000000000000000000000000000101
let q = p >> 2; // 00000000000000000000000000000001
console.log(q,'Q'); // 1

// [Bitwise unsigned right shift (>>>) operator]:another-names for it are Zero-Fill right shift or logical right shift bitwise-operator:


// Positive-Value:
let r = 5; // 00000000000000000000000000000101
let s = r >>> 2; // 00000000000000000000000000000001
console.log(s); // 1
// Negative-Value:
let t = -8; // 11111111 11111111 11111111 11111000
let u = t >>> 1; // 01111111 11111111 11111111 11111100
console.log(u); // 2147483644

// Because JavaScript treats it as an unsigned 32-bit number.

// -8 in binary: 11111111 11111111 11111111 11111000

// >>> 1 becomes: 01111111 11111111 11111111 11111100 → 2147483644

