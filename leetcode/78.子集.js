/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []

  for(let i = 0; i < (1 << nums.length); i++){
    const temp = []
    for(let j = 0; j< nums.length; j++){
      if((i >> j) & 1 === 1) temp.push(nums[j])
    }
    result.push(temp)
  }

  return result
};
// @lc code=end
