/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const lengths = wordDict.map(item => item.length)
  const minLengths = Math.min(...lengths)
  const db = new Array(minLengths).fill(false)
  db[0] = true

  for(let i = minLengths; i<= s.length; i++){
    for(let j = 0; j <= i - minLengths; j++){
      if(db[j] && wordDict.includes(s.substring(j, i))){
        db[i] = true
        break
      }
    }
  }
  return Boolean(db[s.length])
};
// @lc code=end
