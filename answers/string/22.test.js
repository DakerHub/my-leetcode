const { generateParenthesis, generateParenthesis1 } = require("./22");

describe("有效括号生成 动态规划", () => {
  test('1 => ["()"]', () => {
    expect(generateParenthesis(1)).toEqual(expect.arrayContaining(["()"]));
  });
  test('2 => ["(())","()()"]', () => {
    expect(generateParenthesis(2)).toEqual(expect.arrayContaining(["(())", "()()"]));
  });
  test(`3 => [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]`, () => {
    expect(generateParenthesis(3)).toEqual(expect.arrayContaining(["((()))", "(()())", "(())()", "()(())", "()()()"]));
  });
  test(`4 => [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()"]`, () => {
    expect(generateParenthesis(4)).toEqual(
      expect.arrayContaining([
        "(((())))",
        "((()()))",
        "((())())",
        "((()))()",
        "(()(()))",
        "(()()())",
        "(()())()",
        "(())(())",
        "(())()()",
        "()((()))",
        "()(()())",
        "()(())()",
        "()()(())",
        "()()()()"
      ])
    );
  });
});
describe.only("有效括号生成 回溯法", () => {
  test('1 => ["()"]', () => {
    expect(generateParenthesis1(1)).toEqual(expect.arrayContaining(["()"]));
  });
  test('2 => ["(())","()()"]', () => {
    expect(generateParenthesis1(2)).toEqual(expect.arrayContaining(["(())", "()()"]));
  });
  test(`3 => [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]`, () => {
    expect(generateParenthesis1(3)).toEqual(expect.arrayContaining(["((()))", "(()())", "(())()", "()(())", "()()()"]));
  });
  test(`4 => [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()"]`, () => {
    expect(generateParenthesis1(4)).toEqual(
      expect.arrayContaining([
        "(((())))",
        "((()()))",
        "((())())",
        "((()))()",
        "(()(()))",
        "(()()())",
        "(()())()",
        "(())(())",
        "(())()()",
        "()((()))",
        "()(()())",
        "()(())()",
        "()()(())",
        "()()()()"
      ])
    );
  });
});
