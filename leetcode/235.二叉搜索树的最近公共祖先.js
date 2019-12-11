/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const fatherLine = (father,childer)=>{
        if(childer){
            childer.father = father
            fatherLine(childer,childer.left)
            fatherLine(childer,childer.right)
        }
    }
    fatherLine(null,root)
    const pFathers = []
    while(p){
        pFathers.push(p)
        p = p.father
    }
    while(q){
        if(pFathers.includes(q)){
            return q
        }
        q = q.father
    }
    return null
};
// @lc code=end

