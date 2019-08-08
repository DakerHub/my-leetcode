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
  if (s.length <= numRows || numRows === 1) return s
  const splitLen = numRows * 2 - 2
  const arr = []
  let arrFilled = []
  while (s.length > 0) {
    arr.push(s.substring(0, splitLen))
    s = s.substring(splitLen)
  }
  for (let i = 0; i < arr.length; i++) {
    const unitArr = arr[i].split('')
    let offset = 0

    for (let j = 1; j < numRows - 1; j++) {
      const fillLen1 = numRows - j - 1
      unitArr.splice(numRows + offset, 0, ...new Array(fillLen1).fill(-1))
      offset += fillLen1 + 1
      const fillLen2 = j
      unitArr.splice(numRows + offset, 0, ...new Array(fillLen2).fill(-1))
      offset += j
    }
    arrFilled = arrFilled.concat(unitArr)
  }

  let result = ''

  for (let i = 0; i < numRows; i++) {
    let offset = 0
    while (i + offset < arrFilled.length) {
      if (arrFilled[i + offset] !== -1) {
        result += arrFilled[i + offset]
      }
      offset += numRows
    }
  }
  return result
}

module.exports = convert
