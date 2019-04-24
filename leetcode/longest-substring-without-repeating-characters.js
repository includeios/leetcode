/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const ifOnlyString = (sting)=>{
    const obj = {}
    for(let i = 0;i<string.length;i++){
      if(obj[string[i]]){
        return false
      } else {
        obj[string[i]] = true
      }
    }
    return true
  }
  const maxLength = 1
  for(let i = 0;i<s.length-1;i++){
    for(let j = i+1;j<s.length;j++){
      const string = s.substring(i, j)
      if (ifOnlyString(string) && string.length > maxLength){
        maxLength = string.length
      }
    }
  }
  return maxLength
}; 