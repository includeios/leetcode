/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  
  const invertNode = (node)=>{
    if (node) {
      const tempNode = node.left
      node.left = node.right
      node.right = tempNode

      invertNode(node.left)
      invertNode(node.right)
    }

  }

  invertNode(root)
  return root
  
};