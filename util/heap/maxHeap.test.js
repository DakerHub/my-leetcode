const { buildMaxHeap, isMaxHeap, maxHeapSort, maxHeapInsert, maxHeapExtract } = require('./maxHeap');

test('测试最大堆', () => {
  expect(isMaxHeap([1, 2, 3])).toEqual(false);
  expect(isMaxHeap([8, 6, 7, 4, 2, 3, 9])).toEqual(false);

  expect(isMaxHeap([3, 1, 2])).toEqual(true);
  expect(isMaxHeap([8, 6, 7, 4, 2, 3, 1])).toEqual(true);
});

test('建最大堆', () => {
  expect(isMaxHeap(buildMaxHeap([2, 23, 3, 6, 9, 14, 26, 78, -12]))).toEqual(true);
  expect(isMaxHeap(buildMaxHeap([2, 23, 3, 6]))).toEqual(true);
  expect(isMaxHeap(buildMaxHeap([2, 23]))).toEqual(true);
  expect(isMaxHeap(buildMaxHeap([10, 14, 16, 13]))).toEqual(true);
});

test('堆排序', () => {
  expect(maxHeapSort([6, 3, 1, 8, 9])).toEqual([1, 3, 6, 8, 9]);
  expect(maxHeapSort([2, 23, 3, 6, 9, 14, 26, 78, -12])).toEqual([-12, 2, 3, 6, 9, 14, 23, 26, 78]);
});

test('堆插入', () => {
  var heap = [6, 4, 2, 3];
  maxHeapInsert(heap, 9);
  console.log(heap);
  expect(isMaxHeap(heap)).toEqual(true);
});

test('堆提取', () => {
  var heap = [6, 4, 2, 3];

  expect(maxHeapExtract(heap)).toEqual(6);
  expect(isMaxHeap(heap)).toEqual(true);
});
