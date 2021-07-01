/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0
    while(n > 4) {
      const template = n / 5
      count += parseInt(template)
      n = template
    }
    return count
};
// @lc code=end

