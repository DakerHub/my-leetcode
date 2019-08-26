/**
 * 22. 有效括号生成
 * 动态规划
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return ["()"];
  }

  let p = generateParenthesis(n - 1);

  p = p.map(str => {
    const extend = [`()${str}`, `${str}()`];

    let offset = 0;
    while (str.length >= offset + 1) {
      const result = insert(str, offset);
      if (result) {
        extend.push(result.str);
        offset = result.next;
      } else {
        break;
      }
    }

    return extend;
  });

  p = flat(p);

  return [...new Set(p)];
};

function insert(str, offset) {
  while (str.length >= offset + 1) {
    const char = str.charAt(offset);
    offset++;
    if (char === "(") {
      return {
        str: `${str.substring(0, offset)}()${str.substring(offset)}`,
        next: offset
      };
    }
  }
}

function flat(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      return newArr.push(...element);
    }
    return newArr.push(element);
  });
  return newArr;
}

/**
 * 22. 有效括号生成
 * 回溯法
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis1 = function(n) {
  const res = [];

  backtrack("", n, n, n, res);

  return res;
};

function backtrack(curStr, leftRest, rightRest, n, res) {
  if (curStr.length === 2 * n) {
    return res.push(curStr);
  }

  if (leftRest !== 0) {
    backtrack(curStr + "(", leftRest - 1, rightRest, n, res);
  }

  if (rightRest > leftRest) {
    backtrack(curStr + ")", leftRest, rightRest - 1, n, res);
  }
}

module.exports = {
  generateParenthesis,
  generateParenthesis1
};
