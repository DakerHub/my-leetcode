const { mergeTwoLists } = require('./21');
const { testMultiFn } = require('./../../util/test');
const { toLinkedList, toString } = require('./../../util/linkedList/LinkedList');

const testFn1 = (vals1, vals2) => {
  var l1 = toLinkedList(vals1);
  var l2 = toLinkedList(vals2);
  var head = mergeTwoLists(l1.head, l2.head);
  return toString(head);
};
const fns = [testFn1];

test('[1,2,4] [1,3,4]合并', () => {
  expect(testMultiFn(fns, [1, 2, 4], [1, 3, 4])).toBe('1 -> 1 -> 2 -> 3 -> 4 -> 4');
});

test('[1,1] [1,1,1]合并', () => {
  expect(testMultiFn(fns, [1, 1], [1, 1, 1])).toBe('1 -> 1 -> 1 -> 1 -> 1');
});

test('[] []合并', () => {
  expect(testMultiFn(fns, [], [])).toBe('');
});

test('[] [0]合并', () => {
  expect(testMultiFn(fns, [], [0])).toBe('0');
});

test('[0] []合并', () => {
  expect(testMultiFn(fns, [], [0])).toBe('0');
});
