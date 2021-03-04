const { findMedianSortedArrays } = require('./4');
const { testMultiFn } = require('./../../util/test');

const fns = [findMedianSortedArrays];

test('[1,3],[2] => 2', () => {
  expect(testMultiFn(fns, [1, 3], [2])).toEqual(2);
});

test('[2],[] => 2', () => {
  expect(testMultiFn(fns, [2], [])).toEqual(2);
});

test('[],[2] => 2', () => {
  expect(testMultiFn(fns, [], [2])).toEqual(2);
});
