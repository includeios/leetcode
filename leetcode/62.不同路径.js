/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const db = []
  db[0] = new Array(n).fill(1)
  for(let i = 1; i < m; i++){
    db[i] = new Array(n).fill(0)
    db[i][0] = 1
  }

  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      db[i][j] = db[i][j-1] + db[i-1][j]
    }
  }
  return db[m-1][n-1]
};
// @lc code=end
