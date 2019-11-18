/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hash = new Map()
    numbers.forEach((item,index)=>hash.set(item,index))
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i] + numbers[0] > target) break
        if(hash.has(target - numbers[i])) return [i+1,hash.get(target - numbers[i])+1]
    }
    return null
};
// @lc code=end

