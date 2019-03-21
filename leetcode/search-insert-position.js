/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] == target || nums[i] > target) {
      return i
    }
  }
  return len
};

console.log(searchInsert([1, 3, 5, 6],7))