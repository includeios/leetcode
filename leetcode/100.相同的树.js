/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const ergodic = (node)=>{
        if(!node) return 'null'
        return node.val + ergodic(node.left) + ergodic(node.right)
    }   
    return ergodic(p) === ergodic(q)
};
// @lc code=end

