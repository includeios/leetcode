/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = {
    '(':')',
    '{':'}',
    '[':']',
  }
  for(let i = 0;i<s.length;i++){
    let item = s[i]
    if(!stack.length){
      stack.push(item)
    } else {
      topItem = stack[stack.length -1]
      if(map[topItem] === item){
        stack.pop()
      } else {
        stack.push(item)
      }
    }
  }
  return !stack.length
};
// @lc code=end

