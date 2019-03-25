//2. 两数相加
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
var addTwoNumbers = function (l1, l2) {  
  let val1 = l1.val
  let val2 = l2.val
  let next1 = l1.next
  let next2 = l2.next
  let val = val1 + val2
  let anotherAdd = parseInt(val / 10)
  const resultNode = new ListNode(val % 10)
  let node = resultNode

  while (next1 || next2 || anotherAdd != 0) {

    let nextval1 = next1 ? next1.val : 0
    let nextval2 = next2 ? next2.val : 0
    val = nextval1 + nextval2 + anotherAdd
    anotherAdd = parseInt(val / 10)
    const nextNode = new ListNode(val % 10)
    node.next = nextNode
    node = nextNode
    next1 = next1 ? next1.next : null
    next2 = next2 ? next2.next : null
  }

  return resultNode
};