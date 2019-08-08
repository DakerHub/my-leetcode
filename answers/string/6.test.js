const convert = require('./6')

describe('Z字形变换', () => {
  test('LEETCODEISHIRING, 3 => LCIRETOESIIGEDHN', () => {
    expect(convert('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN')
  })
  test('LEETCODEISHIRING, 4 => LDREOEIIECIHNTSG', () => {
    expect(convert('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG')
  })
  test('A, 1 => A', () => {
    expect(convert('A', 1)).toBe('A')
  })
  test('ABCDE, 4 => AB', () => {
    expect(convert('ABCDE', 4)).toBe('ABCED')
  })
  test('AB, 1 => AB', () => {
    expect(convert('AB', 1)).toBe('AB')
  })
  test('ABCDE, 2 => ACEBD', () => {
    expect(convert('ABCDE', 2)).toBe('ACEBD')
  })
})
