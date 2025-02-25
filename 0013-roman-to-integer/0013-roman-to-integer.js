/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
      res -= romanMap[s[i]]
    } else {
      res += romanMap[s[i]]
    }
  }

  return res;
};