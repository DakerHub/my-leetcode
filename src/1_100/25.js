const { ListNode } = require('./../../util/linkedList/LinkedList');

// 25. K 个一组翻转链表

// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：

// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  var p = new ListNode(0, head);

  var inner = (prev, k) => {
    // 反转某节点后的k个节点, 并返回最后一个节点，如果不够k则返回null
    if (!prev) {
      return null;
    }
    if (k === 1) {
      return prev.next;
    }

    var subTail = inner(prev.next, k - 1);
    if (!subTail) {
      return null;
    }

    var subHead = prev.next.next;

    prev.next.next = subTail.next;
    subTail.next = prev.next;
    prev.next = subHead;
    return subTail.next;
  };

  var cur = p;
  while (cur) {
    cur = inner(cur, k);
  }

  return p.next;
};

module.exports = { reverseKGroup };
