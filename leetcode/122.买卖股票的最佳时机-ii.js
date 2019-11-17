/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let min_prices = prices[0]
    let flag = 0
    for(let i = 1;i<prices.length;i++){
        if(prices[i] > prices[i-1] && flag === 0){
            min_prices = prices[i-1]
            flag = 1
        } else if(prices[i] < prices[i-1] && flag === 1){
           result += prices[i-1] - min_prices
           flag = 0
        }
    }
    if(flag === 1) result += prices[prices.length - 1] - min_prices
    return result
};
// @lc code=end

