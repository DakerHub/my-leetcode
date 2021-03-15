const { deleteDuplicates, deleteDuplicates2 } = require('./83');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  var head = deleteDuplicates(l.head);
  return toString(head);
};
const testFn2 = (vals) => {
  var l = toLinkedList(vals);
  var head = deleteDuplicates2(l.head);
  return toString(head);
};
const fns = [testFn1, testFn2];

test('[1,1,2]去重', () => {
  expect(testMultiFn(fns, [1, 1, 2])).toBe('1 -> 2');
});
test('[1,1,2,3,3]去重', () => {
  expect(testMultiFn(fns, [1, 1, 2, 3, 3])).toBe('1 -> 2 -> 3');
});

test('[0,0,0]去重', () => {
  expect(testMultiFn(fns, [0, 0, 0])).toBe('0');
});

test('[0]去重', () => {
  expect(testMultiFn(fns, [0])).toBe('0');
});

test('[]去重', () => {
  expect(testMultiFn(fns, [])).toBe('');
});
