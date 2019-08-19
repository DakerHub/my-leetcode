const { myAtoi, myAtoi2, myAtoi3 } = require("./8");

describe("字符串转整数", () => {
  test("+- => 0", () => {
    expect(myAtoi("+-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi("-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi("-")).toBe(0);
  });
  test("      + => 0", () => {
    expect(myAtoi("      +")).toBe(0);
  });
  test("       => 0", () => {
    expect(myAtoi("      ")).toBe(0);
  });
  test("42 => 42", () => {
    expect(myAtoi("42")).toBe(42);
  });
  test("4193 with words => 4193", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
  });
  test("words and 987 => 0", () => {
    expect(myAtoi("words and 987")).toBe(0);
  });
  test("-91283472332 => -2147483648", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
  });
});

describe("字符串转整数", () => {
  test("+- => 0", () => {
    expect(myAtoi2("+-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi2("-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi2("-")).toBe(0);
  });
  test("      + => 0", () => {
    expect(myAtoi2("      +")).toBe(0);
  });
  test("       => 0", () => {
    expect(myAtoi2("      ")).toBe(0);
  });
  test("42 => 42", () => {
    expect(myAtoi2("42")).toBe(42);
  });
  test("4193 with words => 4193", () => {
    expect(myAtoi2("4193 with words")).toBe(4193);
  });
  test("words and 987 => 0", () => {
    expect(myAtoi2("words and 987")).toBe(0);
  });
  test("-91283472332 => -2147483648", () => {
    expect(myAtoi2("-91283472332")).toBe(-2147483648);
  });
});

describe.only("字符串转整数", () => {
  test("+- => 0", () => {
    expect(myAtoi3("+-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi3("-")).toBe(0);
  });
  test("- => 0", () => {
    expect(myAtoi3("-")).toBe(0);
  });
  test("      + => 0", () => {
    expect(myAtoi3("      +")).toBe(0);
  });
  test("       => 0", () => {
    expect(myAtoi3("      ")).toBe(0);
  });
  test("42 => 42", () => {
    expect(myAtoi3("42")).toBe(42);
  });
  test("   -42 => -42", () => {
    expect(myAtoi3("   -42")).toBe(-42);
  });
  test("4193 with words => 4193", () => {
    expect(myAtoi3("4193 with words")).toBe(4193);
  });
  test("words and 987 => 0", () => {
    expect(myAtoi3("words and 987")).toBe(0);
  });
  test("-91283472332 => -2147483648", () => {
    expect(myAtoi3("-91283472332")).toBe(-2147483648);
  });
});
