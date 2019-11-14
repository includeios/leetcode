/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const Hash = new Map([[1,1],[2,2]])
  const setHash = (n)=>{
    if(!Hash.has(n)) Hash.set(n,setHash(n-1) + setHash(n-2))
    
    return Hash.get(n)
  }
  setHash(n)
  return Hash.get(n)
};
// @lc code=end

