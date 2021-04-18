function buildMinHeap(nums) {
  for (let i = nums.length; i > 0; i--) {
    minHeapify(nums, i, nums.length);
  }

  return nums;
}

function minHeapify(nums, i, size) {
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
  if (left < cur) {
    largest = i * 2;
    cur = left;
  }
  if (right < cur) {
    largest = i * 2 + 1;
  }

  // 如果存在最大子节点，则和根节点互换
  // 由于该子节点的值变了，所以还需对该子节点最大堆化
  if (largest !== -1) {
    exchange(nums, i - 1, largest - 1);
    minHeapify(nums, largest, size);
  }
}

function minHeapInsert(heap, x) {
  heap[heap.length] = x;

  var curOrder = heap.length,
    cur = x,
    p = heap[parent(curOrder) - 1];

  while (p !== undefined && p > cur) {
    exchange(heap, curOrder - 1, parent(curOrder) - 1);
    curOrder = parent(curOrder);
    cur = heap[curOrder - 1];
    p = heap[parent(curOrder) - 1];
  }
}

function minHeapExtract(heap) {
  var max = heap[0];
  exchange(heap, 0, heap.length - 1);
  minHeapify(heap, 1, heap.length - 1);
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

function isMinHeap(heap) {
  for (let i = 1; i <= heap.length; i++) {
    var cur = heap[i - 1];
    var left = heap[i * 2 - 1];
    var right = heap[i * 2];

    if (left !== undefined && right !== undefined) {
      if (cur <= left && cur <= right) {
        continue;
      }
    } else if (left === undefined && right === undefined) {
      continue;
    } else if (left !== undefined && cur <= left) {
      continue;
    }

    return false;
  }

  return true;
}

module.exports = {
  buildMinHeap,
  minHeapify,
  minHeapInsert,
  minHeapExtract,
  isMinHeap,
};
