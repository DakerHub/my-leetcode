const lengthOfLongestSubstring = require("./3");

describe("无重复字符的最长子串", () => {
  test("abcabcbb => 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  test("bbbbb => 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test("pwwkew => 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
  test("abcbc => 3", () => {
    expect(lengthOfLongestSubstring("abcbc")).toBe(3);
  });
  test("dvdf => 3", () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
  test(" => 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
  test("_ => 0", () => {
    expect(lengthOfLongestSubstring("_")).toBe(1);
  });
});
