const { reverseKGroup } = require('./25');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, k) => {
  var l = toLinkedList(vals);
  var head = reverseKGroup(l.head, k);
  return toString(head);
};

const fns = [testFn1];

test('[1,2,3,4,5]反转3', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5], 3)).toBe('3 -> 2 -> 1 -> 4 -> 5');
});

test('[1,2]反转2', () => {
  expect(testMultiFn(fns, [1, 2], 2)).toBe('2 -> 1');
});
