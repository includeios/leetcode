/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const obj = {}
  strs.forEach(item=>{
    const sortItem = item.split('').sort().join('')
    if (obj[sortItem]) obj[sortItem].push(item)
    else obj[sortItem] = [item]
  })
  return Object.values(obj)
};

groupAnagrams('["eat","tea","tan","ate","nat","bat"]')