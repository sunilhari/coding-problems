/**
 * Problem Statement
 * Reverse a string.
 * Input:"Hello"
 * Output:"olleH"
 */

function reverseString(str = []) {
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverseString;
