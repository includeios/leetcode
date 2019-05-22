/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let index_0 = 0
  let index_2 = nums.length - 1
  let cur_index = 0
  while (cur_index <= index_2) {
    if (nums[cur_index] == 0) {
      let temp = nums[index_0]
      nums[index_0] = nums[cur_index]
      nums[cur_index] = temp
      index_0++
      cur_index++
    } else if (nums[cur_index] == 2) {
      let temp = nums[index_2]
      nums[index_2] = nums[cur_index]
      nums[cur_index] = temp
      index_2--
    } else {
      cur_index++
    }
  }
  return nums
};