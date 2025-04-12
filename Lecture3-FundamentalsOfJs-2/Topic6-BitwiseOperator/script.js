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
 * - ~ (NOT)
 * - ^ (XOR)
 * - << (Left Shift)
 * - >> (Right Shift)
 * - >>> (Unsigned Right Shift)
 */

// [ Bitwise AND (&) operator]: compares each bit of two numbers and returns a new bit-number which is going to be the result of the comparison:
// It compares them acc to the (AND) operator-properties:where each bit is 1 only if both corresponding bits in the input numbers are (1) otherwise, it's (0):

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


