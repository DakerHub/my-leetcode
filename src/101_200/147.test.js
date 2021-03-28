const { insertionSortList } = require('./147');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals) => {
  var l = toLinkedList(vals);
  var head = insertionSortList(l.head);
  return toString(head);
};
const fns = [testFn1];

test('[4,2,1,3]排序', () => {
  expect(testMultiFn(fns, [4, 2, 1, 3])).toBe('1 -> 2 -> 3 -> 4');
});

test('[-1,5,3,4,0]排序', () => {
  expect(testMultiFn(fns, [-1, 5, 3, 4, 0])).toBe('-1 -> 0 -> 3 -> 4 -> 5');
});

test('[0]排序', () => {
  expect(testMultiFn(fns, [0])).toBe('0');
});
test('[]排序', () => {
  expect(testMultiFn(fns, [])).toBe('');
});

test('[1,2,3]排序', () => {
  expect(testMultiFn(fns, [1, 2, 3])).toBe('1 -> 2 -> 3');
});
