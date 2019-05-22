/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let beginIndex = 0
  let endIndex = height.length - 1
  let maxArea = 0

  for (; beginIndex < endIndex;) {
    const beginHeight = height[beginIndex]
    const endHeight = height[endIndex]
    const area = Math.min(beginHeight, endHeight) * (endIndex - beginIndex)
    if (maxArea < area) maxArea = area
    if (beginHeight < endHeight) beginIndex++
    else endIndex--
  }

  return maxArea
};