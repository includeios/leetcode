/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxHeightIndex = 0
  let maxHeight = 0
  let result = 0
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeightIndex = i
      maxHeight = height[i]
    }
  }

  let temp = 0

  for (let leftIndex = 0; leftIndex < maxHeightIndex; leftIndex++) {
    if (height[leftIndex] > temp) {
      temp = height[leftIndex]
    } else {
      result += temp - height[leftIndex]
    }
  }

  temp = height[height.length - 1]

  for (let rightIndex = height.length - 2; rightIndex > maxHeightIndex; rightIndex--) {

    if (height[rightIndex] > temp) {
      temp = height[rightIndex]
    } else {
      result += temp - height[rightIndex]
    }
  }
  return result
};