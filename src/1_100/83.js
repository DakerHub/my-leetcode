const { ListNode } = require('./../../util/linkedList/LinkedList');

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
var deleteDuplicates = function (head) {
  var l = new ListNode(-1, head),
    cur = head,
    prev = l,
    m = new Map();
  while (cur) {
    if (m.get(cur.val) === true) {
      prev.next = cur.next;
    } else {
      prev = cur;
      m.set(cur.val, true);
    }

    cur = cur.next;
  }

  return head;
};

// 排序链表，注意
var deleteDuplicates2 = function (head) {
  var p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return head;
};

module.exports = { deleteDuplicates, deleteDuplicates2 };
