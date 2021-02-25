const { simplifyPath, simplifyPath2 } = require('./71');
const { testMultiFn } = require('./../../util/test');

const fns = [simplifyPath, simplifyPath2];

test('/home/ 简化为 /home', () => {
  expect(testMultiFn(fns, '/home/')).toBe('/home');
});
test('/../ 简化为 /', () => {
  expect(testMultiFn(fns, '/../')).toBe('/');
});
test('/a/./b/../../c/ 简化为 /c', () => {
  expect(testMultiFn(fns, '/a/./b/../../c/')).toBe('/c');
});
