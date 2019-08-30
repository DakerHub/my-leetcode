/**
 * 4. 寻找两个有序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    let tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  let i = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const isEven = (len1 + len2) % 2 === 0;
  const half = isEven ? (len1 + len2) / 2 : (len1 + len2 + 1) / 2;
  const left = [];
  const right = [];

  while (true) {
    const j = half - i;
    left[0] = nums1.slice(0, i);
    right[0] = nums1.slice(i);
    left[1] = nums2.slice(0, j);
    right[1] = nums2.slice(j);

    const left1 = left[0];
    const right1 = right[0];
    const left2 = left[1];
    const right2 = right[1];

    const left1Last = left1[left1.length - 1];
    const left2Last = left2[left2.length - 1];
    const right1First = right1[0];
    const right2First = right2[0];

    if (left1Last <= right2First && left2Last <= right1First) {
      return getMedian(left[0], left[1], right[0], right[1], isEven);
    }

    if (left2Last > right1First) {
      i++;
      continue;
    }
  }

  function getMedian(left1, left2, right1, right2, isEven) {
    const left1Last = left1[left1.length - 1];
    const left2Last = left2[left2.length - 1];
    const right1First = right1[0];
    const right2First = right2[0];

    const leftMax =
      left1Last === undefined ? left2Last : left2Last === undefined ? left1Last : Math.max(left1Last, left2Last);
    const rightMin =
      right1First === undefined
        ? right2First
        : right2First === undefined
        ? right1First
        : Math.min(right1First, right2First);

    console.log(leftMax, rightMin);
    if (isEven) {
      return (leftMax + rightMin) / 2;
    } else {
      return leftMax;
    }
  }
};

module.exports = {
  findMedianSortedArrays
};
