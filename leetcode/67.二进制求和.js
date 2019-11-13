/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split('')
  b = b.split('')
  if(a.length < b.length){
    a = Array.from({length:b.length - a.length},()=>0).concat(a)
  } else {
    b = Array.from({length:a.length - b.length},()=>0).concat(b)
  }

  let temp = 0
  let result = ''
  for(let i = a.length -1;i>= 0;i--){    
    const add = parseInt(a[i]) + parseInt(b[i]) + temp
    result = add % 2+result
    temp = parseInt(add / 2)
  }
  if(temp) result = temp+result
  return result
};
// @lc code=end

