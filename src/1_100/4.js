/*
4. 寻找两个正序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
*/

/**
 * 合并法 O(m+n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const l = nums1.length + nums2.length;
  let count = 0;
  let n1,
    n2 = 0;

  while (count <= Math.floor(l / 2)) {
    const t = nums1[0] < nums2[0] || nums2.length === 0 ? nums1.shift() : nums2.shift();
    if (l % 2 === 0) {
      n1 = n2;
      n2 = t;
    } else {
      n1 = n2 = t;
    }

    count++;
  }

  return (n1 + n2) / 2;
};

/**
 * 分治法 O(log(m+n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function (nums1, nums2) {};

module.exports = { findMedianSortedArrays, findMedianSortedArrays2 };
