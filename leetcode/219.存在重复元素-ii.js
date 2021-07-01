/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const hashMap = {}
  for(let i = 0; i< nums.length;i++) {
    const num = nums[i]
    const value = hashMap[num]
    if(value !== undefined && i - value <= k) {
      return true
    } else {
      hashMap[num] = i
    }
  }
  return false
};
// @lc code=end

