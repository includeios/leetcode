/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m,nums1.length - m)
  let i = 0, j = 0, k = 0;
  while(i<m && j<n){
    if(nums1[k] > nums2[j] ){
      nums1.splice(k,0,nums2[j])
      j++
    } else {
      i++
    }
    k++
  }
  while(j<n){
    nums1.push(nums2[j])
    j++
  }
};
// @lc code=end

