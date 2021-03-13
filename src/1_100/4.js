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
  // 只需要存储计算中位数的两个数
  let n1,
    n2 = 0;

  // 只用遍历一半
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
 * 中位数可以理解为第 k 小的值
 * 先假设都是奇数列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  const l = nums1.length + nums2.length;
  const mi = (l - 1) / 2;
  const inner = (s1, e1, s2, e2, k) => {
    const m1i = Math.floor((e1 - s1) / 2);
    const m1 = nums1[m1];
    const m2i = Math.floor((e2 - s2) / 2);
    const m2 = nums1[m2];

    if (m1 < m2) {
      const i = m1i - s1;
      if (i + k >= mi) {
        return nums1(mi - k + s1);
      } else {
        return inner(m1i, e1, s2, e2, k + i);
      }
    } else {
    }
  };

  return inner(Math.ceil(l / 2 - 1), Math.floor(l / 2));
};

module.exports = { findMedianSortedArrays, findMedianSortedArrays2 };
