const { reverseBetween } = require('./92');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, s, e) => {
  var l = toLinkedList(vals);
  var head = reverseBetween(l.head, s, e);
  return toString(head);
};
const fns = [testFn1];

test('[1,2,3,4,5]反转2到4', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5], 2, 4)).toBe('1 -> 4 -> 3 -> 2 -> 5');
});

test('[5]反转1到1', () => {
  expect(testMultiFn(fns, [5], 1, 1)).toBe('5');
});

test('[3,5]反转1到1', () => {
  expect(testMultiFn(fns, [3, 5], 1, 1)).toBe('3 -> 5');
});

test('[3,5]反转1到2', () => {
  expect(testMultiFn(fns, [3, 5], 1, 2)).toBe('5 -> 3');
});
