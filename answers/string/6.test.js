const { convert, convert2, convert3 } = require("./6");

describe("Z字形变换 暴力破解", () => {
  test("LEETCODEISHIRING, 3 => LCIRETOESIIGEDHN", () => {
    expect(convert("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
  });
  test("LEETCODEISHIRING, 4 => LDREOEIIECIHNTSG", () => {
    expect(convert("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
  });
  test("A, 1 => A", () => {
    expect(convert("A", 1)).toBe("A");
  });
  test("ABCDE, 4 => AB", () => {
    expect(convert("ABCDE", 4)).toBe("ABCED");
  });
  test("AB, 1 => AB", () => {
    expect(convert("AB", 1)).toBe("AB");
  });
  test("ABCDE, 2 => ACEBD", () => {
    expect(convert("ABCDE", 2)).toBe("ACEBD");
  });
});

describe("Z字形变换 按行排序", () => {
  test("LEETCODEISHIRING, 3 => LCIRETOESIIGEDHN", () => {
    expect(convert2("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
  });
  test("LEETCODEISHIRING, 4 => LDREOEIIECIHNTSG", () => {
    expect(convert2("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
  });
  test("A, 1 => A", () => {
    expect(convert2("A", 1)).toBe("A");
  });
  test("ABCDE, 4 => AB", () => {
    expect(convert2("ABCDE", 4)).toBe("ABCED");
  });
  test("AB, 1 => AB", () => {
    expect(convert2("AB", 1)).toBe("AB");
  });
  test("ABCDE, 2 => ACEBD", () => {
    expect(convert2("ABCDE", 2)).toBe("ACEBD");
  });
});

describe.only("Z字形变换 按行访问", () => {
  test("LEETCODEISHIRING, 3 => LCIRETOESIIGEDHN", () => {
    expect(convert3("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
  });
  test("LEETCODEISHIRING, 4 => LDREOEIIECIHNTSG", () => {
    expect(convert3("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
  });
  test("A, 1 => A", () => {
    expect(convert3("A", 1)).toBe("A");
  });
  test("ABCDE, 4 => AB", () => {
    expect(convert3("ABCDE", 4)).toBe("ABCED");
  });
  test("AB, 1 => AB", () => {
    expect(convert3("AB", 1)).toBe("AB");
  });
  test("ABCDE, 2 => ACEBD", () => {
    expect(convert3("ABCDE", 2)).toBe("ACEBD");
  });
});
