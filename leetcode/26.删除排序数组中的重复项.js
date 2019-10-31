/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(!nums.length){
    return 0
  }
  if(nums.length === 1){
    return 1
  }
  for(let i = 1;i<nums.length;i++) {
    if(nums[i] === nums[i-1]){
      nums.splice(i-1,1)
      i --
    }
  }
  return nums.length
};
// @lc code=end

