/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 递归查找
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 返回 当前node及之后共有多少个节点
  const inner = (node) => {
    if (node.next) {
      const countFromEnd = inner(node.next);
      if (countFromEnd === n) {
        node.next = node.next && node.next.next;
      }

      return countFromEnd + 1;
    }

    return 1;
  };

  // 删除的是第一个元素
  var total = inner(head);
  if (total === n) {
    head = head.next;
  }

  return head;
};

// 快慢指针法
var removeNthFromEnd2 = function (head, n) {
  var fast = null,
    slow = null;
  while (n--) {
    fast = fast ? fast.next : head;
  }

  if (!fast.next) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow ? slow.next : head;
  }

  slow.next = slow.next.next;
  return head;
};

module.exports = { removeNthFromEnd, removeNthFromEnd2 };
