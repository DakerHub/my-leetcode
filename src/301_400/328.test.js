const { oddEvenList, oddEvenList2 } = require('./328');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  var head = oddEvenList(l.head);
  return toString(head);
};
const testFn2 = (vals) => {
  var l = toLinkedList(vals);
  var head = oddEvenList2(l.head);
  return toString(head);
};
const fns = [testFn1, testFn2];

test('[1,2,3,4,5]', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5])).toBe('1 -> 3 -> 5 -> 2 -> 4');
});
