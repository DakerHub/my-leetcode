/*
20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
*/

/**
 * 思路：只循环一次，像剥洋葱一样，栈顶字符和下一个字符凑不成一对，
 * 就将这个字符推入栈中，否则将栈顶字符推出，表示一对成功凑成。
 * 最后看栈是否为空，不为空表示还有没凑对的
 * @tag 栈
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.length) {
      const peek = stack[stack.length - 1];
      if (['()', '[]', '{}'].includes(peek + char)) {
        stack.pop();
        continue;
      }
    }

    if (!stack.length && [')', '}', ']'].includes(char)) {
      // 早返回
      return false;
    }

    stack.push(char);
  }

  return stack.length === 0;
};

module.exports = isValid;
