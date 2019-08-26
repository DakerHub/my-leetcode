const { generateParenthesis } = require("./22");

describe("有效括号生成", () => {
  test('1 => ["()"]', () => {
    expect(generateParenthesis(1)).toEqual(expect.arrayContaining(["()"]));
  });
});
