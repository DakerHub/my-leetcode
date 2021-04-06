const { rotateRight } = require('./61');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals, k) => {
  var l = toLinkedList(vals);
  var head = rotateRight(l.head, k);
  return toString(head);
};
const fns = [testFn1];

test('[1,2,3,4,5] 旋转2', () => {
  expect(testMultiFn(fns, [1, 2, 3, 4, 5], 2)).toBe('4 -> 5 -> 1 -> 2 -> 3');
});
test('[0,1,2] 旋转4', () => {
  expect(testMultiFn(fns, [0, 1, 2], 4)).toBe('2 -> 0 -> 1');
});
test('[0,1,2] 旋转0', () => {
  expect(testMultiFn(fns, [0, 1, 2], 0)).toBe('0 -> 1 -> 2');
});
test('[0,1,2] 旋转1', () => {
  expect(testMultiFn(fns, [0, 1, 2], 1)).toBe('2 -> 0 -> 1');
});

test('[1,2] 旋转1', () => {
  expect(testMultiFn(fns, [1, 2], 1)).toBe('2 -> 1');
});

test('[1] 旋转5', () => {
  expect(testMultiFn(fns, [1], 5)).toBe('1');
});

test('[] 旋转1', () => {
  expect(testMultiFn(fns, [], 1)).toBe('');
});
