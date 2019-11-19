/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const hash = new Map([[0,0],[1,nums[0]],[2,Math.max(nums[0],nums[1])]])
    const maxPrice = (l)=>{
        if(!hash.has(l))  hash.set(l,Math.max(maxPrice(l-1),maxPrice(l-2)+nums[l-1]))
        return hash.get(l)
    }
    maxPrice(nums.length)
    return hash.get(nums.length)
};
// @lc code=end

