const { trap, trap2, trap3 } = require('./42');
const { arr1 } = require('./../../bigData/42');
const { testMultiFn } = require('./../../util/test');

const fns = [trap, trap2, trap3];

test('[0,1,0,2,1,0,1,3,2,1,2,1]结果为6', () => {
  expect(testMultiFn(fns, [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  // expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test('[4,2,0,3,2,5]结果为9', () => {
  expect(testMultiFn(fns, [4, 2, 0, 3, 2, 5])).toBe(9);
});

test('[0,0,0,0,0,0]结果为0', () => {
  expect(testMultiFn(fns, [0, 0, 0, 0, 0, 0])).toBe(0);
});

test('[4,4,4,4,4,4]结果为0', () => {
  expect(testMultiFn(fns, [4, 4, 4, 4, 4, 4])).toBe(0);
});

test('[4, 4, 1000, 4, 8, 4]结果为4', () => {
  expect(testMultiFn(fns, [4, 4, 1000, 4, 8, 4])).toBe(4);
});

test('bigData arr1 结果为174801674', () => {
  expect(testMultiFn(fns, arr1)).toBe(174801674);
});
