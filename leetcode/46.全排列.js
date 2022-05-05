/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const policyDecision = (nums, list) => {
    if(nums.length === list.length){
      result.push([...list])
      return
    }
    for(let i = 0;i<nums.length; i++) {
      let nowNum = nums[i]
      if(list.includes(nowNum)) continue
      list.push(nowNum)
      policyDecision(nums, list)
      list.pop()
    }
  }
  policyDecision(nums, [])
  return result
};
// @lc code=end

