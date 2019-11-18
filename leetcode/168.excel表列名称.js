/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result = ''
    const letterArray = ['Z','A','B','C','D','E','F','G','H','I','J','k','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y']
    while(n>25){     
        result = letterArray[n % 26] + result
        n = parseInt((n-1) / 26)
    }
    if(n>0) result = letterArray[n] + result
    return result
};
// @lc code=end

