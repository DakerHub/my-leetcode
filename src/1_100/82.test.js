const { deleteDuplicates } = require('./82');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  var head = deleteDuplicates(l.head);
  return toString(head);
};

const fns = [testFn1];

test('[1,2,3,3,4,4,5]去重', () => {
  expect(testMultiFn(fns, [1, 2, 3, 3, 4, 4, 5])).toBe('1 -> 2 -> 5');
});

test('[1,1,1,2,3]去重', () => {
  expect(testMultiFn(fns, [1, 1, 1, 2, 3])).toBe('2 -> 3');
});

test('[]去重', () => {
  expect(testMultiFn(fns, [])).toBe('');
});

test('[1,1]去重', () => {
  expect(testMultiFn(fns, [1, 1])).toBe('');
});

test('[2,3,3]去重', () => {
  expect(testMultiFn(fns, [2, 3, 3])).toBe('2');
});
