const matchingBrackets = require('./index');

describe('Test Suite for Balanced Brackets', () => {
  it('should return true with input ([])[]({})', () => {
    const testStr = '([])[]({})';
    expect(matchingBrackets(testStr)).toBe(true);
  });
  it('should return false with input ([)]', () => {
    const testStr = '([)]';
    expect(matchingBrackets(testStr)).toBe(false);
  });
  it('should return false with input ((()', () => {
    const testStr = '((()';
    expect(matchingBrackets(testStr)).toBe(false);
  });
  it('should return false with input ([])[*]({})', () => {
    const testStr = '([])[*]({})';
    expect(matchingBrackets(testStr)).toBe(false);
  });
});
