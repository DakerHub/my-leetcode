/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  for (var i = 1; i <= s.length / 2; i++) {
    if (s.length % i !== 0) {
      continue;
    }
    var beginningStr = s.substr(0, i);
    var offset = i;
    var isRepeated = true;

    while (offset < s.length) {
      var targetStr = s.substr(offset, i);
      offset = offset + i;
      if (beginningStr !== targetStr) {
        isRepeated = false;
        break;
      }
    }
    if (isRepeated) {
      return true;
    }
  }

  return false;
};

module.exports = repeatedSubstringPattern;
