/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num === 0) return 0
    else if(num %9 === 0) return 9
    return num % 9
};
// @lc code=end

