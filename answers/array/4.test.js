const { findMedianSortedArrays } = require("./4");

describe("4. 寻找两个有序数组的中位数", () => {
  test.only("[5,6],[2,4] => 4.5", () => {
    expect(findMedianSortedArrays([5, 6], [2, 4])).toEqual(4.5);
  });
  test("[1, 3],[2] => 2", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });
  test("[1, 2],[3, 4] => 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
  test("[1, 2, 5],[3, 4] => 3", () => {
    expect(findMedianSortedArrays([1, 2, 5], [3, 4])).toEqual(3);
  });
  test("[1, 2, 5],[3, 4, 6] => 3.5", () => {
    expect(findMedianSortedArrays([1, 2, 5], [3, 4, 6])).toEqual(3.5);
  });
  test("[3],[-2,-1] => -1", () => {
    expect(findMedianSortedArrays([3], [-2, -1])).toEqual(-1);
  });
});
