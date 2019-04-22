/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  const inorderTree = (node)=>{
    if(node){
      inorderTree(node.left)
      result.push(node.val)
      inorderTree(node.right)
    }
  }

  inorderTree(root)
  return result
};