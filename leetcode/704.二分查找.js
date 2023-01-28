/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while(left < right - 1){
    const mid = Math.round(left + (right - left)/2)
    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] < target){
      left = mid
    } else {
      right = mid
    }
  }

  return nums[left] === target
    ? left
    : nums[right] === target ? right : -1
};
// @lc code=end
