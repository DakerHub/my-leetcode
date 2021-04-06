const { ListNode, toString } = require('./../../util/linkedList/LinkedList');
// 61. 旋转链表

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

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
var rotateRight = function (head, k) {
  if (k === 0 || !head) {
    return head;
  }

  var cur = head,
    i = 0,
    l = 1;

  while (cur.next) {
    cur = cur.next;
    l++;
  }

  cur.next = head;
  cur = head;
  k = l - (k % l);

  while (i < k - 1) {
    cur = cur.next;
    i++;
  }

  var newHead = cur.next;
  cur.next = null;
  return newHead;
};

module.exports = { rotateRight };
