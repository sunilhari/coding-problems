const func = require('./index');

test('if Function is defined', () => {
  expect(typeof func).toEqual('function');
});
test('if string is reversed', () => {
  expect(func('Hello')).toEqual('olleH');
});
