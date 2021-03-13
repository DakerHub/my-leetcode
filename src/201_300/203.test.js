const { removeElements } = require('./203');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, el) => {
  var l = toLinkedList(vals);
  var head = removeElements(l.head, el);
  return toString(head);
};
const fns = [testFn1];

test('[1,2,6,3,4,5,6]删除6', () => {
  expect(testMultiFn(fns, [1, 2, 6, 3, 4, 5, 6], 6)).toBe('1 -> 2 -> 3 -> 4 -> 5');
});
test('[7,7,7,7]删除7', () => {
  expect(testMultiFn(fns, [7, 7, 7, 7], 7)).toBe('');
});
test('[]删除6', () => {
  expect(testMultiFn(fns, [], 6)).toBe('');
});
test('[7,7,7,7]删除6', () => {
  expect(testMultiFn(fns, [7, 7, 7, 7], 6)).toBe('7 -> 7 -> 7 -> 7');
});
