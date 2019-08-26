const { isValid } = require("./20");

describe("有效的括号", () => {
  test("() => true", () => {
    expect(isValid("()")).toEqual(true);
  });
  test("()[]{} => true", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });
  test("(] => false", () => {
    expect(isValid("(]")).toEqual(false);
  });
  test("([)] => false", () => {
    expect(isValid("([)]")).toEqual(false);
  });
  test("{[]} => true", () => {
    expect(isValid("{[]}")).toEqual(true);
  });
});
