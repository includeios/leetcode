/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let result = 0
  let obj = {}
  for(let i = 0;i<s.length;i++){
    if(obj[s[i]]) obj[s[i]] ++ 
    else obj[s[i]] = 1
  }

  let flag = false
  let values =  Object.values(obj)

  values.forEach(item=>{
    if(item % 2 != 0 && !flag){
      result += item
      flag = true
    }
    else{
      result += parseInt(item/2) *2
    }
  })

  return result
};