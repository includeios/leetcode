/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxAdd = nums[0]
    let addSize = nums[0]
    for(let i = 1;i<nums.length;i++){
      if(nums[i] > nums[i]+addSize){
        addSize = nums[i]  
      } 
      else {
        addSize = nums[i] + addSize
      }
      maxAdd = Math.max(maxAdd,addSize)      
    }
    return maxAdd
};