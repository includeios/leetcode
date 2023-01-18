/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const minSize = Math.min(...wordDict.map(item => item.length))
  const db = []

  for(let i = 0; i<=s.length; i++ ){
    db[i] = [];
  }

  for(let i = minSize -1 ; i<= s.length; i++){
    for (let j = 0; j <= i - minSize; j++){
      const temp = s.slice(j, i)
      if(wordDict.includes(temp)){
        if(db[j].length) {
          db[j].forEach(item => {
            db[i].push(`${item} ${temp}`)
          })
        }else if(j === 0){
          db[i].push(temp)
        }
      }
    }
  }

  return db[s.length]
};
// @lc code=end
