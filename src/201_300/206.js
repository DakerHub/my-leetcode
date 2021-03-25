const { ListNode } = require('./../../util/linkedList/LinkedList');
// 206. 反转链表
// 反转一个单链表。
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!(head && head.next)) {
    return head;
  }

  var newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return newHead;
};

var reverseList2 = function (head) {
  var l = new ListNode(0, null);

  cur = head;
  while (cur) {
    var next = cur.next;
    cur.next = l.next;
    l.next = cur;
    cur = next;
  }

  return l.next;
};

module.exports = { reverseList, reverseList2 };
