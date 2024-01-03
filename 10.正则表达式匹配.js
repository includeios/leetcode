/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let j = 0
  for(let i = 0; i< p.length; i++){
    if(p[i] === '.'){
      j++
    } else if(p[i] === '*'){
      if(j === s.length - 1 || i === p.length-1) return true
      else {
        i++
        if(p[i] === '.'){
          if(i === p.length-1) return true
          else j++
        }
        while(p[i] !== s[j]){
          j++
          if(j === s.length) return false
        }
        j++
      }
    } else if(p[i] === s[j]){
      j++
    }
  }
  return j === s.length
};
// @lc code=end

