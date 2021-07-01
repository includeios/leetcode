/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const res = new ListNode(0, head);
  let cur = res
  while(cur.next) {
    if(cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return res.next
};

function sliceArray(array, size) {
  var result = [];
  for (var x = 0; x < Math.ceil(array.length / size); x++) {
      var start = x * size;
      var end = start + size;
      result.push(array.slice(start, end));
  }
  return result;
}

function mergeArray(array1, array2, n) {
  const size1 = Math.ceil( array1.length / n ) || 1
  const size2 = Math.ceil( array2.length / n ) || 1
  let array = []
  let star1 = 0
  let star2 = 0
  while(star1 < array1.length || star2 < array2.length) {
    array = array.concat([...array1.slice(star1,star1+size1)], [...array2.slice(star2,star2+size2)])
    star1 += size1
    star2 += size2
  }
}



// @lc code=end

