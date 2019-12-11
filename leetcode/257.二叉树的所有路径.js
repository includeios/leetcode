/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    const binaryTree = (root)=>{
        if(root.left) result.push([root.val].concat(binaryTree(root.left)))
        if(root.left) result.push([root.val].concat(binaryTree(root.left)))
    }
};
// @lc code=end

