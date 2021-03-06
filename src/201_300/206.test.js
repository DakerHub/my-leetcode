const { reverseList, reverseList2, reverseList3 } = require('./206');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  var head = reverseList(l.head);
  return toString(head);
};

const testFn2 = (vals) => {
  var l = toLinkedList(vals);
  var head = reverseList2(l.head);
  return toString(head);
};
const testFn3 = (vals) => {
  var l = toLinkedList(vals);
  var head = reverseList3(l.head);
  return toString(head);
};

const fns = [testFn1, testFn2, testFn3];

test('[1,2,3,4,5]反转', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5])).toBe('5 -> 4 -> 3 -> 2 -> 1');
});

test('[]反转', () => {
  expect(testMultiFn(fns, [])).toBe('');
});
