const { mergeTwoLists } = require('./../1_100/21');

// 148. 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：
//   你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

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
var sortList = function (head) {
  var splitMid = (head) => {
    var sp = (sprev = fp = head);
    while (fp && fp.next) {
      sprev = sp;
      sp = sp.next;
      fp = fp.next.next;
    }

    sprev.next = null;
    return sp;
  };

  if (!(head && head.next)) {
    return head;
  }

  var mid = splitMid(head);

  var l1 = sortList(head);
  var l2 = sortList(mid);
  return mergeTwoLists(l1, l2);
};

module.exports = { sortList };
