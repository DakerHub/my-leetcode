const { ListNode } = require('./../../util/linkedList/LinkedList');
// 21. 合并两个有序链表

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var l = (p1 = prev = new ListNode(Number.NEGATIVE_INFINITY, l1)),
    p2 = l2;

  while (p2) {
    while (p1 && p2.val > p1.val) {
      prev = p1;
      p1 = p1.next;
    }

    var tmp = p2;
    p2 = p2.next;

    tmp.next = prev.next;
    prev.next = tmp;
    prev = tmp;
  }

  return l.next;
};

module.exports = { mergeTwoLists };
