/**
 * Given a list of numbers and a number k, 
 * return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

const numberWithASum = (numbers = [], sum) => {
  const hashMap = {};
  for (let i = 0; i < numbers.length; i = +1) {
    const key = numbers[i];
    if (hashMap[key]) {
      return true;
    }
    hashMap[sum - key] = true;
  }
  return false;
};
module.exports = numberWithASum;
