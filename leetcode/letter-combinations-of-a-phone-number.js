
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const nums2Chart = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const len = digits.length
  const result = []

  const getChart = (string, i) => {
    for (let j = 0; j < nums2Chart[digits[i]].length; j++) {
      if (i < len - 1) {
        getChart(string + nums2Chart[digits[i]][j], i + 1)
      }
      else {
        result.push(string + nums2Chart[digits[i]][j])
      }
    }
  }

  if (digits) {
    getChart('', 0)
  }

  return result
}

letterCombinations('222')