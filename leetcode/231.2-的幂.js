/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0) return false
    if(n === 1) return true
    const href = n/2
    if( href !== parseInt(href)) return false
    return  isPowerOfTwo(href)
};
// @lc code=end

