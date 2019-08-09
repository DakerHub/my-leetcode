/**
 * @description
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * ```
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * ```
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  const splitLen = numRows * 2 - 2;
  const arr = [];
  let arrFilled = [];
  while (s.length > 0) {
    arr.push(s.substring(0, splitLen));
    s = s.substring(splitLen);
  }
  for (let i = 0; i < arr.length; i++) {
    const unitArr = arr[i].split("");
    let offset = 0;

    for (let j = 1; j < numRows - 1; j++) {
      const fillLen1 = numRows - j - 1;
      unitArr.splice(numRows + offset, 0, ...new Array(fillLen1).fill(-1));
      offset += fillLen1 + 1;
      const fillLen2 = j;
      unitArr.splice(numRows + offset, 0, ...new Array(fillLen2).fill(-1));
      offset += j;
    }
    arrFilled = arrFilled.concat(unitArr);
  }

  let result = "";

  for (let i = 0; i < numRows; i++) {
    let offset = 0;
    while (i + offset < arrFilled.length) {
      if (arrFilled[i + offset] !== -1) {
        result += arrFilled[i + offset];
      }
      offset += numRows;
    }
  }
  return result;
};

/**
 * @description 按行排序
 * ```
 * L C I R
 * E T O E S I I G
 * E D H N
 * ```
 * 然后在合并读取
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert2 = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;

  const rows = new Array(Math.min(s.length, numRows)).fill("");

  let dir = 1;
  let currentRowIndex = 0;

  for (let i = 0; i < s.length; i++) {
    rows[currentRowIndex] += s[i];

    if (currentRowIndex === numRows - 1) {
      dir = -1;
    }

    if (currentRowIndex === 0) {
      dir = 1;
    }

    currentRowIndex += dir;
  }
  return rows.join("");
};

/**
 * @description 按行读取
 * 直接按排列规则按行读取
 * R=3
 * ```
 * L   C   I   R     // r=0, (2R - 2) * k
 * E T O E S I I G   // r, 在竖行: (2R - 2) * k + r, 在斜行: (2R - 2) * k + (2R - 2) - r
 * E   D   H   N     // r=R-1, (2R - 2) * k + (R - 1)
 * ```
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert3 = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;

  const rows = new Array(Math.min(s.length, numRows)).fill("");

  const splitLen = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < s.length; j += splitLen) {
      const index1 = j + i;
      rows[i] += s[index1] || "";

      if ((j + i + 1) % splitLen < numRows && i !== 0 && i !== numRows - 1) {
        const index2 = j + splitLen - i;
        rows[i] += s[index2] || "";
      }
    }
  }

  return rows.join("");
};

module.exports = { convert, convert2, convert3 };
