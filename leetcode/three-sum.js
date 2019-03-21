/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  //去重
  const bigArray = []

  nums.sort(function(a,b){return a - b})

  // console.log('nums',nums)

  for(let i = 0;i<nums.length;i++){
    if(nums[i] > 0)break
    for(let j = i+1,k=nums.length-1;j<k;){

      // console.log(i, j, k, nums[i],nums[j], nums[k])

      if(nums[i] + nums[j] + nums[k] == 0){
        if (!bigArray[[nums[i], nums[j], nums[k]].join('')]){
          result.push([nums[i], nums[j], nums[k]])
          bigArray[[nums[i], nums[j], nums[k]].join('')] = 1
        }
            
        j ++
        k --
        while (j<k && nums[j] == nums[j-1]) { j++}
        while(j < k && nums[k] == nums[k+1]){ k --}
      }
      else if (nums[i] + nums[j] + nums[k] > 0){
        k --
        
      }
      else {
        j ++ 
      }
    }
  }
  return result
  
};

console.log(threeSum([-2, 0, 1, 1, 2]))