/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const shash = new Map()
    const thash = new Map()
    const setHash = (string,hash)=>{
        for(let i = 0;i<string.length;i++){
            item = string[i]
            if(hash.has(item)) hash.set(item,hash.get(item)+1)
            else hash.set(item,1)
        }
    }
    setHash(s,shash)
    setHash(t,thash)

    if(shash.size !== thash.size) return false
    for(let [key,value] of shash.entries()){
        if(thash.get(key) !== value) return false
    }
    return true
};
// @lc code=end

