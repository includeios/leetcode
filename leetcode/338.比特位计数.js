/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const resultList = [0]

  for(let i = 1; i<=n; i++){
    if( i % 2 ){
      resultList[i] = resultList[i - 1] + 1
    } else {
      resultList[i] = resultList[i / 2]
    }
  }
  return resultList
}
// @lc code=end
