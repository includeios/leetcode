/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = new Map()
    nums.forEach(item=>{
        if(hash.has(item)) hash.delete(item)
        else hash.set(item,'')
    })
    for (let key of hash.keys()) {
       return key
    }
};
// @lc code=end

