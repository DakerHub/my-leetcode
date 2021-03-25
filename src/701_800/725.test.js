const { splitListToParts } = require('./725');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, k) => {
  var l = toLinkedList(vals);
  var heads = splitListToParts(l.head, k);
  return heads.map((h) => toString(h)).join(', ');
};

const fns = [testFn1];

test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]去重', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe('1 -> 2 -> 3 -> 4, 5 -> 6 -> 7, 8 -> 9 -> 10');
});
test('[1, 2, 3, 4, 5, 6, 7, 8, 9]去重', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toBe('1 -> 2 -> 3, 4 -> 5 -> 6, 7 -> 8 -> 9');
});

test('[1, 2, 3, 4]去重', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4], 5)).toBe('1, 2, 3, 4, ');
});
