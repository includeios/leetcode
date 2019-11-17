/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return []
    let root_stack = [root]
    let result = []
    while(root_stack.length){
        const temp = []
            const result_item = []
            root_stack.forEach(item=>{
                if(item.val !== undefined) result_item.push(item.val)
                if(item.left) temp.push(item.left)
                if(item.right) temp.push(item.right)
            })
        root_stack = temp
        result.unshift(result_item)
    }

    return result
};
// @lc code=end

