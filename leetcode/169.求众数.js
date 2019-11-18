/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = new Map()
    const length = nums.length
    for(let i = 0;i<length;i++){
        let n = hash.get(nums[i]) || 0
        if(n > length/2 - 1) return nums[i]
        else hash.set(nums[i],++n)
    }
    return null
};
// @lc code=end

