/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  while (tx > 0 && ty > 0){
    if(tx === sx && ty === sy){
      return true
    } 
    if(ty > tx){
      const n =  Math.max(parseInt((ty - sy)/sx) ,1)
      ty = ty - n*sx
    } else {
      const n = Math.max(parseInt((tx - sx) / sy),1)
      tx = tx - n * sy
    }
    
  }

  return false
};