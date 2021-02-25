const { largestRectangleArea } = require('./84');
const { testMultiFn } = require('./../../util/test');

const fns = [largestRectangleArea];

test('[2,1,5,6,2,3] 结果为 10', () => {
  expect(testMultiFn(fns, [2, 1, 5, 6, 2, 3])).toBe(10);
});
