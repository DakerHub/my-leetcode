const {
  longestPalindrome1,
  longestPalindrome2,
  longestPalindrome3,
  isPalindromeString
} = require('./5')

describe.skip('判断是否回文字符串', () => {
  test('aa => true', () => {
    expect(isPalindromeString('aa')).toBe(true)
  })
  test('a => true', () => {
    expect(isPalindromeString('a')).toBe(true)
  })
  test('ababa => true', () => {
    expect(isPalindromeString('ababa')).toBe(true)
  })
  test('adaba => false', () => {
    expect(isPalindromeString('adaba')).toBe(false)
  })
})

describe('最长回文子串 中心扩展法', () => {
  test('a => a', () => {
    expect(longestPalindrome1('a')).toBe('a')
  })
  test(' => ', () => {
    expect(longestPalindrome1('')).toBe('')
  })
  test('ac => a', () => {
    expect(longestPalindrome1('ac')).toBe('a')
  })
  test('cbbd => bb', () => {
    expect(longestPalindrome1('cbbd')).toBe('bb')
  })
  test('babad => aba', () => {
    expect(longestPalindrome1('babad')).toBe('aba')
  })
  test('abcda => a', () => {
    expect(longestPalindrome1('abcda')).toBe('a')
  })
  test('aaaa => aaaa', () => {
    expect(longestPalindrome1('aaaa')).toBe('aaaa')
  })
})

describe('最长回文子串 暴力破解法', () => {
  test('a => a', () => {
    expect(longestPalindrome2('a')).toBe('a')
  })
  test(' => ', () => {
    expect(longestPalindrome2('')).toBe('')
  })
  test('ac => a', () => {
    expect(longestPalindrome2('ac')).toBe('c')
  })
  test('cbbd => bb', () => {
    expect(longestPalindrome2('cbbd')).toBe('bb')
  })
  test('babad => aba', () => {
    expect(longestPalindrome2('babad')).toBe('aba')
  })
  test('abcda => a', () => {
    expect(longestPalindrome2('abcda')).toBe('a')
  })
  test('aaaa => aaaa', () => {
    expect(longestPalindrome2('aaaa')).toBe('aaaa')
  })
})

describe.only('最长回文子串 动态规划', () => {
  test('a => a', () => {
    expect(longestPalindrome3('a')).toBe('a')
  })
  test(' => ', () => {
    expect(longestPalindrome3('')).toBe('')
  })
  test('ac => a', () => {
    expect(longestPalindrome3('ac')).toBe('c')
  })
  test('cbbd => bb', () => {
    expect(longestPalindrome3('cbbd')).toBe('bb')
  })
  test('babad => aba', () => {
    expect(longestPalindrome3('babad')).toBe('aba')
  })
  test('abcda => a', () => {
    expect(longestPalindrome3('abcda')).toBe('a')
  })
  test('aaaa => aaaa', () => {
    expect(longestPalindrome3('aaaa')).toBe('aaaa')
  })
})
