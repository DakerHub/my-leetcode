const { evalRPN } = require('./150');
const { testMultiFn } = require('./../../util/test');

const fns = [evalRPN];

test('["2", "1", "+", "3", "*"] 结果 9', () => {
  expect(testMultiFn(fns, ['2', '1', '+', '3', '*'])).toBe(9);
});
test('["4", "13", "5", "/", "+"] 结果 6', () => {
  expect(testMultiFn(fns, ['4', '13', '5', '/', '+'])).toBe(6);
});
test('["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] 结果 22', () => {
  expect(testMultiFn(fns, ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
});
