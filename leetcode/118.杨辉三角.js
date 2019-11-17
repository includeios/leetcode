/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1],[1,1]]
    const result = [[1],[1,1]]
    for(let i = 2;i<numRows;i++){
        const row = [1]
        for(let j = 1;j<i;j++){
            row.push(result[i-1][j-1]+result[i-1][j])
        }
        row.push(1)
        result.push(row)
    }
    return result
};
// @lc code=end

