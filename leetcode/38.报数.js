/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let num = "1"
  for(let i = 1;i<n;i++){
    let nextNum = ''
    let sameString = 1
    for(let j = 0;j<num.length;j++){
      if(num[j] === num[j+1]){
        sameString ++ 
      } else {
        nextNum += ''+sameString+num[j]
        sameString = 1
      }    
    }
    num = nextNum
  }
  return num
};
// @lc code=end

