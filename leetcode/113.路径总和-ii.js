/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = []

  const caculatePath = (node, sum, res) => {
    if(!node) return
    if(node.val === sum && !node.left && !node.right){
      res.push(node.val)
      result.push([...res])
    } else {
      res.push(node.val)
      caculatePath(node.left, sum - node.val, res)
      caculatePath(node.right, sum - node.val, res)
    }
    res.pop()
  }

  caculatePath(root, targetSum, [])

  return result
};
// @lc code=end
