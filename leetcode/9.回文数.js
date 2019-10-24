/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringNum = x + ''
    const length = stringNum.length
    let result = true
    for(let i = 0;i<length/2;i++){
      if(stringNum[i] !== stringNum[length-1-i]){
        result = false
        break
      }
    }
    return result   
};
// @lc code=end

