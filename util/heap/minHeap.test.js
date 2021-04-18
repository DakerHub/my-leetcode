const { buildMinHeap, minHeapInsert, minHeapExtract, isMinHeap } = require('./minHeap');

test('堆插入', () => {
  var heap = [2, 4, 6];
  minHeapInsert(heap, 3);
  console.log(heap);
  expect(isMinHeap(heap)).toEqual(true);
});
