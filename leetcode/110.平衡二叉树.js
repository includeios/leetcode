/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const getDeep = (root) => {
    if(!root) return 0
    return 1 + Math.max(getDeep(root.left),getDeep(root.right))
}

var isBalanced = function(root) {
    if(!root) return true  
    return Math.abs(getDeep(root.left) - getDeep(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)  
};
// @lc code=end

