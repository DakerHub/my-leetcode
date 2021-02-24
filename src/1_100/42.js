/*
42. 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
*/

/*
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
*/

/**
 * 按每一层来算积水格数
 * 时间复杂度为 O(n^2)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0;
  let level = 1;
  let start = 0;
  let end = height.length - 1;

  while (true) {
    const stack = [];
    for (let x = start; x <= end; x++) {
      if (height[x] < level) {
        continue;
      }

      if (stack.length) {
        const peek = stack[stack.length - 1];
        total += x - peek - 1;
      }

      stack.push(x);
    }

    level++;
    start = stack[0];
    end = stack[stack.length - 1];
    if (stack.length <= 1) break;
  }

  return total;
};

/**
 * 动态规划法，单独求出每列的积水高度
 * 要先算出每列所对应的`左最高`和`右最高`
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  const leftMaxArr = [];
  const rightMaxArr = [];
  for (let i = 0; i < height.length; i++) {
    if (leftMaxArr.length === 0) {
      leftMaxArr.push(height[i]);
      continue;
    }

    leftMaxArr.push(Math.max(leftMaxArr[leftMaxArr.length - 1], height[i]));
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (rightMaxArr.length === 0) {
      rightMaxArr.unshift(height[i]);
      continue;
    }

    rightMaxArr.unshift(Math.max(rightMaxArr[0], height[i]));
  }

  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let minWall = Math.min(leftMaxArr[i], rightMaxArr[i]);
    total += Math.max(minWall - height[i], 0);
  }

  return total;
};

/**
 * 单调栈应用
 *
 * 思路就是匹配左右高墙，将左高墙推入栈中
 * 在遇到右高墙时进行计算，依次拿栈顶的左高墙，计算该右高墙导致的积水总和。
 * 计算过程其实就是找高（左右高墙最矮的），宽（以栈顶高墙为参考到其左右高墙的距离之和，和栈顶一样高的不算，直接推出）
 * 计算完后，比该右高墙矮的左高墙全部都已出栈。
 * @param {number[]} height
 * @return {number}
 */
var trap3 = function (height) {
  const stack = [];
  let total = 0;

  for (let i = 0; i < height.length; i++) {
    const h = height[i];

    while (stack.length && height[stack[stack.length - 1]] < h) {
      const pi = stack.pop();
      const left = stack[stack.length - 1];

      if (left !== undefined) {
        total += (Math.min(height[left], h) - height[pi]) * (i - left - 1);
      }
    }

    stack.push(i);
  }

  return total;
};

module.exports = { trap, trap2, trap3 };
