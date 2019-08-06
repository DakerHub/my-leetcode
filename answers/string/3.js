/**
 * @description 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const n = s.length;
  let i = 0,
    j = 0;

  while (j < n) {
    const substring = s.substr(i, j - i);
    const existIndex = substring.indexOf(s.charAt(j));

    if (existIndex !== -1) {
      i += existIndex + 1;
    } else {
      max = Math.max(substring.length + 1, max);
      j++;
    }
  }

  return max;
};

module.exports = lengthOfLongestSubstring;
