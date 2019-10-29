/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length){
    return ''
  }
  if(strs.length === 1){
    return strs[0]
  }

  const minLen = function(strs){
    let min = strs[0]
    for(let i = 1;i<strs.length;i++){
      if(strs[i].length < min.length){
        min = strs[i]
      }
    }
    return min
  }

  const minLenString = minLen(strs)
  const mid = Math.ceil(minLenString.length / 2)
  const leftMidString = minLenString.substr(0,mid)
  const rightMidString = minLenString.substr(mid)
  
  const commonPrefix = function(leftMidString,rightMidString,strs,startIndex){
    for(let i = 0;i<strs.length;i++){
      const str = strs[i].substr(startIndex)
      if(str.indexOf(leftMidString) !== 0){
        if(leftMidString.length === 1){
          return ''
        } else {
          const mid = Math.ceil(leftMidString.length / 2)
          return commonPrefix(leftMidString.substr(0,mid),leftMidString.substr(mid),strs,0)
        }      
      }
    }
    if(rightMidString.length === 0){
      return leftMidString
    } else {
      const mid = Math.ceil(rightMidString.length / 2)
      return leftMidString + commonPrefix(rightMidString.substr(0,mid),rightMidString.substr(mid),strs,leftMidString.length)
    }    
  }
 
  return commonPrefix(leftMidString,rightMidString,strs,0)
};
// @lc code=end

