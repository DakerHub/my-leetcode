const { partition } = require('./86');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, el) => {
  var l = toLinkedList(vals);
  var head = partition(l.head, el);
  return toString(head);
};
const fns = [testFn1];

test('[1,4,3,2,5,2]分割3', () => {
  expect(testMultiFn(fns, [1, 4, 3, 2, 5, 2], 3)).toBe('1 -> 2 -> 2 -> 4 -> 3 -> 5');
});

test('[2,1]分割2', () => {
  expect(testMultiFn(fns, [2, 1], 2)).toBe('1 -> 2');
});
test('[1,4,3,0,2,5,2]分割3', () => {
  expect(testMultiFn(fns, [1, 4, 3, 0, 2, 5, 2], 3)).toBe('1 -> 0 -> 2 -> 2 -> 4 -> 3 -> 5');
});
