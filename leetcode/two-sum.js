/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const bigArray = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    bigArray[nums[i]] = i
  }

  for (let i = 0; i < length; i++) {
    const index_2 = bigArray[target - nums[i]]
    if (index_2 != undefined && i != index_2) {
      return [i, index_2]
    }
  }
};