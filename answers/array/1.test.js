const twoSum = require("./1");

describe("两数之和", () => {
  test("nums = [2, 7, 11, 15], target = 9, 返回[0, 1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("nums = [3, 7,1,4,8,9,11], target = 13, 返回[3, 5]", () => {
    expect(twoSum([3, 7, 1, 4, 8, 9, 11], 13)).toEqual([3, 5]);
  });
  test("nums = [3,2,4], target = 6, 返回[1, 2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
