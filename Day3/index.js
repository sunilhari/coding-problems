/**
 * Given a string of round, curly, and square open and closing brackets, return whether the brackets * are balanced (well-formed).
 */

const symbolMap = {
  '{': '}',
  '[': ']',
  '(': ')',
};
const openingSymbols = Object.keys(symbolMap);
const closingSymbols = Object.values(symbolMap);
const allowedSymbols = [...openingSymbols, ...closingSymbols];

function matchingBrackets(str) {
  const symbolList = str.split('');
  const symbolStack = [];
  for (let i = 0; i < symbolList.length; i += 1) {
    // should return if an undefined symbol came
    const symbol = symbolList[i];
    if (!allowedSymbols.includes(symbol)) {
      return false;
    }
    // push to stack if it is an opening symbol
    if (openingSymbols.includes(symbol)) {
      symbolStack.push(symbol);
    } else if (closingSymbols.includes(symbol)) {
      if (symbolStack.length > 0) {
        const poppedValue = symbolStack.pop();
        if (!poppedValue) {
          return false;
        }
        if (symbolMap[poppedValue] !== symbol) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return symbolStack.length === 0;
}

matchingBrackets('([])[]({})');

module.exports = matchingBrackets;
