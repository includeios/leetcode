/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return !!(n % 4)
  // const resultMap = {
  //   1: true,
  //   2: true,
  //   3: true,
  // }

  // const findResult = function(n) {
  //   if(resultMap[n] !== undefined){
  //     return resultMap[n]
  //   }
  //   resultMap[n] = !findResult(n-1) || !findResult(n-2) || !findResult(n-3)
  //   return resultMap[n]
  // }

  // return findResult(n)
};
// @lc code=end

function differenceBy(array1, array2, iteratee) {
  if(!Array.isArray(array1) || !Array.isArray(array2)) return
  const hasIteratee = typeof iteratee === 'function'
  const result = new Map()
  for(item of array1) {
    result.set(hasIteratee ? iteratee(item) : item, item)
  }
  const deduplicatedArr2 = [...new Set(array2)]
  for(item of deduplicatedArr2) {
    const key = hasIteratee ? iteratee(item) : item
    if(result.has(key)) {
      result.delete(key)
    } else {
      result.set(key, item)
    }
  }
  return [...result.values()]
}

function convert(foo) {
  const transform = (keys, value, result) => {
    const temp = keys.shift()
    if(keys.length) {
      if(!result[temp]) {
        result[temp] = {}
      }
      transform(keys, value, result[temp])
    } else {
      result[temp] = value
    }
  }
  const result = {}
  Object.entries(foo).forEach(([key, value]) => {
    transform(key.split('.'), value, result)
  })
  return result
}
console.log(convert({
  'A': 1,
  'B.A': 2,
  'B.B': 4,
  'CC.D.E': 3,
  'CC.D.F': 5
}))

const images = [
	'https://pic1.jpg',
	'https://pic2.jpg',
	'https://pic3.jpg',
	'https://pic4.jpg',
	// more items
]

const imagesHeight = [
  2,
  3,
  4,
  1,
  // more items
]

const greedy = (images, imagesHeight) => {
  let leftHeight = 0
  let rightHeight = 0
  let left = []
  let right = []

  imagesHeight.forEach((itemHeight, index) => {
    if(leftHeight <= rightHeight) {
      left.push(images[index])
      leftHeight += itemHeight
    } else {
      right.push(images[index])
      rightHeight += itemHeight
    }
  })
}

const dpHalf = (imagesHeight) => {
  const mid = Math.round(imagesHeight.reduce((pre,cur)=> pre+cur, 0) / 2)
  const dp = []

  // 第一个图片的情况
  dp[0] = []
  for(let height = 0; height <= mid; height++ ) {
    dp[0][height] = imagesHeight[0] > height
      ? { max: 0, indexes: []}
      : { max: imagesHeight[0], indexes: [0]}
  }

  for(let i = 1; i < imagesHeight.length; i++) {
    dp[i] = []
    for(let height = 0; height <= mid; height++ ) {
      const currentHeight = imagesHeight[i]
      const unUseCurrentDp = dp[i - 1][height]
      const useCurrentDp = dp[i - 1][height - currentHeight]
      const useCurrentHeight = useCurrentDp ? currentHeight + useCurrentDp.max : 0

      if( useCurrentHeight > unUseCurrentDp.max) {
        dp[i][height] = { max: useCurrentHeight, indexes: useCurrentDp.indexes.concat([i])}
      } else {
        dp[i][height] = { max: unUseCurrentDp.max, indexes:  unUseCurrentDp.indexes}
      }
    }
  }

  return dp[imagesHeight.length - 1][mid]
}

console.log(dpHalf([2,3,4,1]))

const quickSort = (arr) => {
  if(arr.length <= 1) return arr
  const pivot = arr[0]
  const left = []
  const right = []
  for(let i = 1; i< arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]
}

console.log(quickSort([5,6,1,9,3,8,2]))
