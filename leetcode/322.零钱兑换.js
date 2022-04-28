/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(amount === 0) return 0
  if(amount < 0) return -1
  const db = [0]
  for(let i = 1; i<= amount; i++){
    let resultList = new Array(coins.length).fill(0)
    for(let j = 0; j< coins.length; j++) {
      const nowCoin = coins[j]
      const tempAmount = i - nowCoin
      if(tempAmount >= 0 && db[tempAmount] >= 0) {
        resultList[j] += 1 + db[tempAmount]
      }
    }
    resultList = resultList.filter(Boolean)
    db[i] = resultList.length >0 ? Math.min(...resultList) : -1
  }
  return db[amount]
};
// @lc code=end

