const { removeNthFromEnd, removeNthFromEnd2 } = require('./19');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, n) => {
  var l = toLinkedList(vals);
  var head = removeNthFromEnd(l.head, n);
  return toString(head);
};

const testFn2 = (vals, n) => {
  var l = toLinkedList(vals);
  var head = removeNthFromEnd2(l.head, n);
  return toString(head);
};

const fns = [testFn1, testFn2];

test('删除倒数第2个节点', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5], 2)).toBe('1 -> 2 -> 3 -> 5');
});
test('删除只有1个节点的链表', () => {
  expect(testMultiFn(fns, [1], 1)).toBe('');
});
test('删除有2个节点的链表', () => {
  expect(testMultiFn(fns, [1, 2], 1)).toBe('1');
});
