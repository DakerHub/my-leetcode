const { ListNode, toString } = require('./../../util/linkedList/LinkedList');

// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  var l = new ListNode(0),
    prev = new ListNode(0, head),
    tail = l,
    cur = prev,
    i = 0,
    lp,
    rn;

  while (i <= right) {
    var next = cur.next;
    if (i === left - 1) {
      lp = cur;
    }

    if (i === left) {
      tail = cur;
    }

    if (i === right) {
      rn = cur.next;
    }

    if (i >= left) {
      cur.next = l.next;
      l.next = cur;
    }

    cur = next;
    i++;
  }

  lp.next = l.next;
  tail.next = rn;

  return prev.next;
};

module.exports = { reverseBetween };
