/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x < 1){
    return 0
  }
  if(x < 4){
    return 1
  }
  if(x === 4){
    return 2
  }

  let begin = 0;
  let end = parseInt(x/2)

  while(begin < end - 1){
    let middle = parseInt((begin + end) /2)
    
    if(middle * middle == x){
      return middle
    }

    if(middle * middle > x){
      end = middle
    } else{
      begin = middle
    }
  }
  return end * end < x ? end :begin
};
// @lc code=end

