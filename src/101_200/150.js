/*
150. 逆波兰表达式求值

根据 逆波兰表示法，求表达式的值。
有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：
整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
输出: 22
解释:
该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!['+', '-', '*', '/'].includes(token)) {
      stack.push(Number.parseInt(token));
      continue;
    }

    const n1 = stack.pop();
    const n2 = stack.pop();
    switch (token) {
      case '*':
        stack.push(n1 * n2);
        break;
      case '+':
        stack.push(n1 + n2);
        break;
      case '-':
        stack.push(n2 - n1);
        break;
      case '/':
        stack.push(Number.parseInt(n2 / n1));
        break;
    }
  }

  return stack.pop();
};

module.exports = { evalRPN };
