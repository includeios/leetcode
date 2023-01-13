/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []

  const isQueen = (res, row, list) => res[row][list] === 'Q'
  const setQueen = (res, row, list) => (res[row][list] = 'Q')
  const clearQueen = (res, row, list) => (res[row][list] = '.')

  const isVerify = (res, row, list)=>{
    // 判断列
    for(let i = 0; i < row; i++){
      if(isQueen(res, i, list)) return false
    }
    // 左上
    let i = row - 1;
    let j = list -1;
    while(i>=0 && j>=0){
      if(isQueen(res, i,j)) return false
      i--;
      j--
    }

    // 右上
    i = row - 1;
    j = list + 1
    while(i >=0 && j < n){
      if(isQueen(res, i,j)) return false
      i--
      j++
    }

    return true
  }

  const setQueensByRow = (res, row) => {
    if(row >= n) {
      result.push(res.map(item => item.join('')))
      return
    }

    for(let i = 0; i < n; i++ ){
      if(isVerify(res, row, i)){
        setQueen(res, row, i)
        setQueensByRow(res, row + 1)
        clearQueen(res, row, i)
      }
    }
  }

  //init
  const temp = []
  for(let i = 0; i < n; i++){
    temp[i] = new Array(n).fill('.')
  }
  setQueensByRow(temp,0)

  return result
};
// @lc code=end
