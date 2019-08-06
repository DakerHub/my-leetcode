const repeatedSubstringPattern = require("./459");

test("abab 是重复字串组成", () => {
  expect(repeatedSubstringPattern("abab")).toBe(true);
});
