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
 * - ^ (XOR)
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
// Important: The result is the two's complement of the number (inverts bits and adds 1):this (2's complement) term refers to a mathematical method to represent negative numbers in binary.

let g = 5; // 00000000000000000000000000000101
let h = ~g;// 11111111111111111111111111111010

console.log(h); // -6

// Explanation:
// Original number (5):  00000000000000000000000000000101
// After NOT operation: 11111111111111111111111111111010
// This represents -6 in two's complement form
