/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if(nums.length === 1) return 0
  if(nums[1] < nums[0]) return 0
  const length = nums.length
  if(nums[length - 1] > nums[length - 2]) return length - 1

  let left = 1
  let right = length - 2
  while(left <= right){
    const mid = parseInt((left + right) / 2)
    if(nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]){
      return mid
    } else if(nums[mid + 1] > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
};
// @lc code=end
