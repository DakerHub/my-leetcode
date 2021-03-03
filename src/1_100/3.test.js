const { lengthOfLongestSubstring } = require('./3');
const { testMultiFn } = require('./../../util/test');

const fns = [lengthOfLongestSubstring];

test('abcabcbb => 3', () => {
  expect(testMultiFn(fns, 'abcabcbb')).toBe(3);
});
test('bbbbb => 1', () => {
  expect(testMultiFn(fns, 'bbbbb')).toBe(1);
});
test('pwwkew => 3', () => {
  expect(testMultiFn(fns, 'pwwkew')).toBe(3);
});

test('abcb => 0', () => {
  expect(testMultiFn(fns, 'abcb')).toBe(3);
});

test('abba => 2', () => {
  expect(testMultiFn(fns, 'abba')).toBe(2);
});

test(' => 0', () => {
  expect(testMultiFn(fns, '')).toBe(0);
});
