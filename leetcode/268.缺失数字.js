/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = []
    nums.forEach(item=>arr[item] = true) 
    for(let i = 0;i<arr.length;i++){
        if(!arr[i]) return i
    }
    return arr.length
};
// @lc code=end

