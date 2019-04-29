/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const array = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      array[nums[i]] = true
    }

  }
  if (!array.length) {
    return 1
  }
  for (let j = 1; j < array.length; j++) {
    if (!array[j]) {
      return j
    }
  }
  return array.length
}