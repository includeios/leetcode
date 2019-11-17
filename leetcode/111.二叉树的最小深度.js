/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    if(!root.left && !root.right) return 1
    if(!root.left && root.right) return minDepth(root.right) + 1
    if(root.left && !root.right) return minDepth(root.left) + 1
    return Math.min(minDepth(root.left),minDepth(root.right)) + 1
};
// @lc code=end

