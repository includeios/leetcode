/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const sLength = s.length
  const tLength = t.length
  if(!sLength || !tLength || tLength > sLength) return 0;

  const db = Array(sLength).fill([])

  let temp = 0
  for(let i = 0; i<sLength;i++){
    db[i] = Array(tLength).fill(0)
    if(s[i] === t[0]){
      temp ++
    }
    db[i][0] = temp
  }

  for(let i = 1; i< sLength; i++) {
    for(let j = 1; j<= i; j++) {
      if(s[i] === t[j]) {
        db[i][j] = Number(db[i-1][j-1]) + Number(db[i-1][j])
      } else {
        db[i][j] = Number(db[i-1][j])
      }
    }
  }
  return db[sLength-1][tLength-1]
};
// @lc code=end
