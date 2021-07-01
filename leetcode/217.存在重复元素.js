/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const hashMap = {}
  for(let i = 0;i<nums.length;i++) {
    const num = nums[i]
    if(hashMap[num]) {
      return true
    } else {
      hashMap[num] = 1
    }
  }
  return false
};
// @lc code=end

