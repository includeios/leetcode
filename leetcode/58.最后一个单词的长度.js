import { constants } from "crypto";

/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(!s.length){
    return 0
  }
  let n = 0;
  let endFlag = true
  for(let i = s.length-1;i>=0;i--){
    if(s[i] === ' '){
      if(endFlag) continue
      else break
    } 
    n ++
    endFlag = false
  }
  return n
};
// @lc code=end

