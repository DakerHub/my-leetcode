const { intToRoman, intToRoman2, intToRoman3 } = require("./12");

describe("整数转罗马数字，余数法", () => {
  test("1 => I", () => {
    expect(intToRoman(1)).toBe("I");
  });
  test("2 => II", () => {
    expect(intToRoman(2)).toBe("II");
  });
  test("58 => LVIII", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });
  test("1994 => MCMXCIV", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });
});

describe("整数转罗马数字，贪心法", () => {
  test("1 => I", () => {
    expect(intToRoman2(1)).toBe("I");
  });
  test("2 => II", () => {
    expect(intToRoman2(2)).toBe("II");
  });
  test("58 => LVIII", () => {
    expect(intToRoman2(58)).toBe("LVIII");
  });
  test("1994 => MCMXCIV", () => {
    expect(intToRoman2(1994)).toBe("MCMXCIV");
  });
});

describe("整数转罗马数字，贪心法变态版", () => {
  test("1 => I", () => {
    expect(intToRoman3(1)).toBe("I");
  });
  test("2 => II", () => {
    expect(intToRoman3(2)).toBe("II");
  });
  test("58 => LVIII", () => {
    expect(intToRoman3(58)).toBe("LVIII");
  });
  test("1994 => MCMXCIV", () => {
    expect(intToRoman3(1994)).toBe("MCMXCIV");
  });
});
