const func = require('./index');

test('if Function is defined', () => {
  expect(typeof func).toEqual('function');
});

test('Number List [1, 2, 3, 4, 5]', () => {
  const list = [1, 2, 3, 4, 5];
  const result = func(list);
  expect(result).toStrictEqual([120, 60, 40, 30, 24]);
});
