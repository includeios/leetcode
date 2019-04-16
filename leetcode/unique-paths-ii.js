/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length){
    if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[obstacleGrid.length - 1].length - 1]
      || obstacleGrid[0][0]){
      return 0
    }
  } else {
    return 0
  }
 
  const unobstacleGrid = [].concat(obstacleGrid)
  obstacleGrid.forEach((itemX,x)=>{
    itemX.forEach((itemY,y)=>{
      if(itemY === 1){
        unobstacleGrid.splice(x,1)
      }
    })
  })

  let result = 0
  if (unobstacleGrid.length){
    if (unobstacleGrid[0].length == 1){
      result = 1
    } else {
      result = unobstacleGrid.length * (unobstacleGrid[0].length - 1)
    }
  } 
  return result
};

uniquePathsWithObstacles([[0],[1]])