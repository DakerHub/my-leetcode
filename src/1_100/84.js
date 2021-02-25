/*
84. 柱状图中最大的矩形

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
*/

/*
输入: [2,1,5,6,2,3]
输出: 10
*/

/**
 * 单调递增栈
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxHeight = 0;
  const stack = [];
  const getTop = (stack) => {
    return stack.length ? stack[stack.length - 1] : -1;
  };

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];

    let needToCalc = stack[stack.length - 1];
    while (h < heights[needToCalc]) {
      stack.pop();
      let newTop = getTop(stack);
      maxHeight = Math.max((i - newTop - 1) * heights[needToCalc], maxHeight);
      needToCalc = getTop(stack);
    }

    stack.push(i);
  }

  while (stack.length !== 0) {
    const needToCalc = stack.pop();
    let newTop = getTop(stack);
    maxHeight = Math.max((heights.length - newTop - 1) * heights[needToCalc], maxHeight);
  }

  return maxHeight;
};

module.exports = {
  largestRectangleArea,
};
