/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows < 2) return s
  const zArray = []
  let row = 0
  let line = 0
  let flag = true
  for(let i = 0; i< s.length; i++){
    if(!zArray[row]) zArray[row] = []
    zArray[row][line] = s[i]
    if(row === numRows - 1 && flag){
      flag = false
    } else if(row === 0 && !flag){
      flag = true
    }
    if(flag){
      row ++
    } else {
      row --
      line ++
    }
  }
  return zArray.map(item => item.join('')).join('')
};
// @lc code=end

