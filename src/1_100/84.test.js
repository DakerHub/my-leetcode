const { largestRectangleArea } = require('./84');
const { testMultiFn } = require('./../../util/test');

const fns = [largestRectangleArea];

test('[2,1,5,6,2,3] 结果为 10', () => {
  expect(testMultiFn(fns, [2, 1, 5, 6, 2, 3])).toBe(10);
});

test('[2,4] 结果为 4', () => {
  expect(testMultiFn(fns, [2, 4])).toBe(4);
});

test('[4,4,4] 结果为 12', () => {
  expect(testMultiFn(fns, [4, 4, 4])).toBe(12);
});
