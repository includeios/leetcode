/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const result = []
  let nextNum = n
  while(true) {
    let num = 0
    let cycleString = String(nextNum)
    for(let i = 0;i<cycleString.length;i++){
      num += cycleString[i] * cycleString[i]
    }
    if(num === 1) return true
    else if(result.includes(num)) return false
    result.push(num)
    nextNum = num
  }
};
// @lc code=end

