import { setFlagsFromString } from "v8";

/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */
[1,2]
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next){
        return true
    }
    let slow = head
    let fast = head
    let odd = true
    const href = []
    while(fast){
        href.push(slow.val)
        slow = slow.next
        if(fast.next) fast = fast.next.next
        else {
            fast = null
            odd = false
        }
        
    }
    if(!odd) href.pop()
    
    while(slow){
        if(slow.val !== href.pop()){
            return false
        }
        slow = slow.next
    }
    return true
};
// @lc code=end


