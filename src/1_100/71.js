/*
71. 简化路径

给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。
在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。
请注意，返回的 规范路径 必须遵循下述格式：
始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。
 */

/*
输入：path = "/home//foo/"
输出："/home/foo"

输入：path = "/a/./b/../../c/"
输出："/c"

输入：path = "/../"
输出："/"
*/

/**
 * 思路：
 * 1. 先将字符串按照'/'切割
 * 2. 将切割的数组从头开始入栈
 * 3. 遇到'..'时出栈
 * 4. 空字符串和'.'不作处理
 *
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let word = '';
  const stack = [];
  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === '/') {
      if (word) {
        stack.push(word);
        word = '';
      }

      continue;
    }

    word += char;
  }
  stack.push(word);

  const stack2 = [];
  while (stack.length) {
    bottom = stack.shift();
    if (bottom === '.' || !bottom) {
      continue;
    }

    if (bottom === '..') {
      stack2.pop();
    } else {
      stack2.push(bottom);
    }
  }

  return '/' + stack2.join('/');
};

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath2 = function (path) {
  stack = path.split(/\/+/g);

  const stack2 = [];
  while (stack.length) {
    bottom = stack.shift();
    if (bottom === '.' || !bottom) {
      continue;
    }

    if (bottom === '..') {
      stack2.pop();
    } else {
      stack2.push(bottom);
    }
  }

  return '/' + stack2.join('/');
};

module.exports = { simplifyPath, simplifyPath2 };
