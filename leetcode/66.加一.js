/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length
  if(!length) return 0
  let type = 1
  for(let i = length -1;i>=0;i--){
    const item = digits[i] + type
    digits[i] = item % 10
    type = parseInt(item / 10)
  }
  if(type > 0) digits.unshift(type)
  return digits
};
// @lc code=end

