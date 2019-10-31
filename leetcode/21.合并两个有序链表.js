/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2){
    return new ListNode('')
  }
  let result = []
  
  while(l1 || l2){
    if(!l1){
      while(l2){
        result.push(l2.val)
        l2 = l2.next
      }
    } else if(!l2){
      result.push(l1.val)
      l1 = l1.next
    } else {
      if(l1.val < l2.val){
        result.push(l1.val)
        l1 = l1.next
      } else {
        result.push(l2.val)
        l2 = l2.next
      }
    }
  }

  let list = new ListNode(result[0])
  let firstItem = list
  for(let i = 1;i<result.length;i++){
    list.next = new ListNode(result[i])
    list = list.next
  }

  return firstItem
};
// @lc code=end

