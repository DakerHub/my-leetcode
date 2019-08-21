const { letterCombinations } = require("./17");

describe("电话号码的字母组合", () => {
  test('"23" => ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
    expect(letterCombinations("23")).toEqual(
      expect.arrayContaining(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    );
  });
  test('"" => []', () => {
    expect(letterCombinations("")).toEqual(expect.arrayContaining([]));
  });
});
