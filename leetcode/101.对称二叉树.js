/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    if(!root) return true
    const isSameTree = (left,right)=>{
        if(left === null && right === null) return true
        if(left === null || right === null) return false
        return left.val === right.val && isSameTree(left.left,right.right) && isSameTree(left.right,right.left) 
    }
    return isSameTree(root.left,root.right)
};
// @lc code=end

