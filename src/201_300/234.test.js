const { isPalindrome, isPalindrome2 } = require('./234');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  return isPalindrome(l.head);
};
const testFn2 = (vals) => {
  var l = toLinkedList(vals);
  return isPalindrome2(l.head);
};
const fns = [testFn1, testFn2];

test('[1,2]不是回文', () => {
  expect(testMultiFn(fns, [1, 2])).toBe(false);
});
test('[1,2,2,1]是回文', () => {
  expect(testMultiFn(fns, [1, 2, 2, 1])).toBe(true);
});
test('[1,2,3,2,1]是回文', () => {
  expect(testMultiFn(fns, [1, 2, 3, 2, 1])).toBe(true);
});
