/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let dp = [1,1]
    for(let i = 1;i<=rowIndex;i++){
        const row = [1]
        for(let j = 1;j<i;j++){
            row.push(dp[j-1]+dp[j])
        }
        row.push(1)
        dp = row
    }
    return dp
};
// @lc code=end

