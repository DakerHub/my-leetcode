const isValid = require('./20');

test('字符串 "[](){}" 有效', () => {
  expect(isValid('[](){}')).toBe(true);
});

test('字符串 "[()]([]){{}}" 有效', () => {
  expect(isValid('[()]([]){{}}')).toBe(true);
});

test('字符串 "[({)]}" 无效', () => {
  expect(isValid('[({)]}')).toBe(false);
});

test('字符串 "[])()]{}" 无效', () => {
  expect(isValid('[])()]{}')).toBe(false);
});
