/*
 * Given an array of integers, return a new array such that
 * each element at index i of the new array is the product of
 * all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 * Follow-up: what if you can't use division?
 */

function getMultiplied(list) {
  const product = list.reduce((a, b) => a * b);
  const result = list.map((number) => product / number);
  return result;
}

/**
 * Approach without division - Answer for followup
 */

function withOutDivision(list = []) {
  const left = [];
  const right = [];
  const result = [];
  const { length } = list;
  left[0] = 1;
  right[length - 1] = 1;

  //left array
  for (let i = 1; i < length; i += 1) {
    left[i] = list[i - 1] * left[i - 1];
  }

  //right array

  for (let i = length - 2; i >= 0; i -= 1) {
    right[i] = list[i + 1] * right[i + 1];
  }
  for (let i = 0; i < length; i += 1) {
    result[i] = left[i] * right[i];
  }
  return result;
}
module.exports = withOutDivision;
