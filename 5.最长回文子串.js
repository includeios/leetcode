/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length === 1) return s

  const getPalindrome = (index) => {
    let result = s[index]
    let left = index - 1
    let right = index + 1
    while(right <= s.length && result[result.length - 1] === s[right]) {
      result = `${result}${s[right]}`
      right ++ 
    }

    while(left >=0 && right < s.length && s[left] === s[right]){
      result = `${s[left]}${result}${s[right]}`
      left --
      right ++
    }
    return result
  }

  let longestResult = ''
  for(let i = 0; i< s.length; i++ ){
    const tempResult = getPalindrome(i)
    if(tempResult.length > longestResult.length){
      longestResult = tempResult
    }
  }

  return longestResult
};
// var longestPalindrome = function(s) {
//   const len = s.length
//   if(len === 1) return s

//   let maxLen = 1
//   let begin = 0
//   let end = 1
//   const db = []
//   for(let i = 0; i < len; i++){
//     db[i] = []
//     db[i][i] = true
//   }
//   for(let j = 1; j < len; j++){
//     for(let i = 0; i < j; i++) {
//       if(j - i > 1){
//         const result = db[i + 1][j - 1] && s[i] === s[j]
//         db[i][j] = result
//         if(result && j - i + 1 > maxLen){
//           maxLen =  j - i + 1
//           begin = i
//           end = j + 1
//         }
//       } else {
//         const result = s[i] === s[j]
//         db[i][j] = result
//         if(result && j - i + 1 > maxLen){
//           maxLen =  j - i + 1
//           begin = i
//           end = j + 1
//         }
//       }
//     }
//   }
//   return s.slice(begin, end)
// };
// @lc code=end

