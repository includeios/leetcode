/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const generateMap = (list) => {
    const tempMap = {}
    for(let i = 0; i< list.length; i++) {
      const item = list[i]
      if(tempMap[item]){
        tempMap[item].push(i)
      } else {
        tempMap[item] = [i]
      }
    }
    return Object.values(tempMap)
  }
  const patternResult = generateMap(pattern)
  const strResult = generateMap(s.split(' '))

  if(patternResult.length !== strResult.length) return false

  for(let i = 0; i<patternResult.length; i++){
    const parrernItemList = patternResult[i]
    const strItemList = strResult[i]
    for(let j = 0; j<parrernItemList.length; j++) {
      if(parrernItemList.length !== strItemList.length) return false
      if(parrernItemList[j] !== strItemList[j]) return false
    }
  }
  return true
  
};
// @lc code=end

