/*
3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

*/

/**
 * 滑动窗口法 O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    max = 0;
  const map = new Map();

  while (r < s.length) {
    const ix = map.get(s[r]);
    if (ix !== undefined && ix >= l) {
      l = ix + 1;
    }

    map.set(s[r], r);
    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
};

module.exports = { lengthOfLongestSubstring };
