const func = require('./index');

test('if Function is defined', () => {
  expect(typeof func).toEqual('function');
});

test('Number List [10, 15, 3, 7] and Sum:17', () => {
  const list = [10, 15, 3, 7];
  const sum = 17;
  const result = func(list, sum);
  expect(result).toEqual(true);
});
test('Number List [10, 15, 3, 7] and Sum:20', () => {
  const list = [10, 15, 3, 7];
  const sum = 20;
  const result = func(list, sum);
  expect(result).toEqual(false);
});
test('Number List [1, 5, 3, 7] and Sum:8', () => {
  const list = [1, 5, 3, 7];
  const sum = 8;
  const result = func(list, sum);
  expect(result).toEqual(true);
});
