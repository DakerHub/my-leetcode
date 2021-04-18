function buildMaxHeap(nums) {
  for (let i = nums.length; i > 0; i--) {
    maxHeapify(nums, i, nums.length);
  }

  return nums;
}

// 假设i的左右子堆都是最大堆，将i变为最大堆
function maxHeapify(nums, i, size) {
  // 如果超界则不用处理
  if (i > size) {
    return;
  }

  var cur = nums[i - 1];
  var left = i * 2 <= size ? nums[i * 2 - 1] : undefined;
  var right = i * 2 + 1 <= size ? nums[i * 2] : undefined;

  // 找到比自己大并且是最大的子节点
  // 依次比较，记录最大子节点的序号
  var largest = -1;
  if (left > cur) {
    largest = i * 2;
    cur = left;
  }
  if (right > cur) {
    largest = i * 2 + 1;
  }

  // 如果存在最大子节点，则和根节点互换
  // 由于该子节点的值变了，所以还需对该子节点最大堆化
  if (largest !== -1) {
    exchange(nums, i - 1, largest - 1);
    maxHeapify(nums, largest, size);
  }
}

// 堆排序，原址排序
// 步骤：
// 1. 将数组堆化
// 2. 将堆顶(数组第一个元素)和堆尾的元素互换
// 3. 将堆大小-1,然后对堆顶进行最大堆化
// 4. 当堆得大小为0时,排序完成
function maxHeapSort(nums) {
  var heap = buildMaxHeap(nums);
  var sortLast = (heap, size) => {
    if (size === 0) {
      return;
    }

    exchange(heap, 0, size - 1);
    maxHeapify(heap, 1, size - 1);
    sortLast(heap, size - 1);
  };

  sortLast(heap, heap.length);

  return heap;
}

function maxHeapInsert(heap, x) {
  heap[heap.length] = x;

  var curOrder = heap.length,
    cur = x,
    p = heap[parent(curOrder) - 1];

  while (p !== undefined && p < cur) {
    exchange(heap, curOrder - 1, parent(curOrder) - 1);
    curOrder = parent(curOrder);
    cur = heap[curOrder - 1];
    p = heap[parent(curOrder) - 1];
  }
}

function maxHeapExtract(heap) {
  var max = heap[0];
  exchange(heap, 0, heap.length - 1);
  maxHeapify(heap, 1, heap.length - 1);
  heap.splice(heap.length - 1, 1);

  return max;
}

function parent(i) {
  return Math.floor(i / 2);
}

function exchange(nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function isMaxHeap(heap) {
  for (let i = 1; i <= heap.length; i++) {
    var cur = heap[i - 1];
    var left = heap[i * 2 - 1];
    var right = heap[i * 2];

    if (left !== undefined && right !== undefined) {
      if (cur >= left && cur >= right) {
        continue;
      }
    } else if (left === undefined && right === undefined) {
      continue;
    } else if (left !== undefined && cur >= left) {
      continue;
    }

    return false;
  }

  return true;
}

module.exports = {
  maxHeapify,
  buildMaxHeap,
  isMaxHeap,
  maxHeapSort,
  maxHeapInsert,
  maxHeapExtract,
};
