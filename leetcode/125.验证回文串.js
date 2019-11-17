/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.toLowerCase().replace(/[^0-9 | ^a-z]/g,'').replace(/ /g,'')
    let herf_string = ''
    let herf_end_string = ''
    const mid = parseInt(string.length / 2)
    if(string.length % 2){
        herf_string = string.substring(0,mid)
        herf_end_string = string.substring(mid+1)
    } else {
        herf_string = string.substring(0,mid)
        herf_end_string = string.substring(mid)
    }
    const herfLength = herf_string.length - 1
    for(let i = 0;i<herf_string.length;i++){
        if(herf_end_string[herfLength - i] !== herf_string[i]){
            return false
        }
    }
    return true
};
// @lc code=end

