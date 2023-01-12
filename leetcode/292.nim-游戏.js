/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return !!(n % 4)
  // const resultMap = {
  //   1: true,
  //   2: true,
  //   3: true,
  // }

  // const findResult = function(n) {
  //   if(resultMap[n] !== undefined){
  //     return resultMap[n]
  //   }
  //   resultMap[n] = !findResult(n-1) || !findResult(n-2) || !findResult(n-3)
  //   return resultMap[n]
  // }

  // return findResult(n)
};
// @lc code=end

