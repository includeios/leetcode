/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length){
    return null
  }

  const rootVal = preorder[0]
  
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] == rootVal) {
      let root = new TreeNode(rootVal)
      // console.log('rrot', root, preorder, inorder)
      root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
      root.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
      return root
    }
  }
};
buildTree([3, 9, 20, 15, 7],[9, 3, 15, 20, 7])
