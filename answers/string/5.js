/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。中心扩展法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
  if (s.length <= 1) return s

  let substring = s[0]

  for (let i = 0; i < s.length; i += 0.5) {
    let offsetBoth = 1

    while (
      Math.ceil(i - offsetBoth) >= 0 &&
      Math.floor(i + offsetBoth) <= s.length - 1
    ) {
      const prevIndex = Math.ceil(i - offsetBoth)
      const nextIndex = Math.floor(i + offsetBoth)
      if (s[prevIndex] !== s[nextIndex]) {
        break
      }

      if (nextIndex - prevIndex + 1 >= substring.length) {
        substring = s.substring(prevIndex, nextIndex + 1)
      }

      offsetBoth++
    }
  }

  return substring
}

/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。暴力破解法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
  let palindrome = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.substring(i, j + 1)
      if (isPalindromeString(substring)) {
        if (substring.length >= palindrome.length) {
          palindrome = substring
        }
      }
    }
  }

  return palindrome
}

/**
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。动态规划法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function(s) {
  const length = s.length
  const P = {}
  let maxLen = 0
  let maxPal = ''
  for (let len = 1; len <= length; len++)
    for (let start = 0; start < length; start++) {
      let end = start + len - 1
      if (end >= length) break
      P[`${start}-${end}`] =
        (len === 1 || len === 2 || P[`${start + 1}-${end - 1}`]) &&
        s.charAt(start) == s.charAt(end)
      if (P[`${start}-${end}`] && len > maxLen) {
        maxPal = s.substring(start, end + 1)
      }
    }
  return maxPal
}

function isPalindromeString(s) {
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false
    }
  }

  return true
}

module.exports = {
  longestPalindrome1,
  longestPalindrome2,
  longestPalindrome3,
  isPalindromeString
}
