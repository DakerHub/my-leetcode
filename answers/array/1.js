/**
 * @description 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  nums.forEach((n, i) => {
    map[n] = i;
  });

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const j = map[target - n];
    if (j !== undefined && j !== i) {
      return [i, j];
    }
  }
};

module.exports = twoSum;
