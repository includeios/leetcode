/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const LMNum = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
    }
    let result = 0;
    for(let i = 0;i<s.length;i++){
      if(s[i] === 'I' && ['V','X'].includes(s[i+1])){
        result+=LMNum[s[i+1]] - LMNum[s[i]]
        i++
      } else if(s[i] === 'X' && ['L','C'].includes(s[i+1])){
        result+=LMNum[s[i+1]] - LMNum[s[i]]
        i++
      } else if(s[i] === 'C' && ['D','M'].includes(s[i+1])){
        result+=LMNum[s[i+1]] - LMNum[s[i]]
        i++
      } else {
        result+=LMNum[s[i]]
      } 
     
    }
    return result
};
// @lc code=end

