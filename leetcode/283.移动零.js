/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let leftPointer  = 0
  let rightPointer = 0
  while(rightPointer < nums.length) {
    if(nums[rightPointer]){
      const temp = nums[rightPointer]
      nums[rightPointer] = nums[leftPointer]
      nums[leftPointer] = temp
      leftPointer ++
    }
    rightPointer ++
  }

};
// @lc code=end

