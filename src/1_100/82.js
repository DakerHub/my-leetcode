// 82. 删除排序链表中的重复元素 II
// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

// 返回同样按升序排列的结果链表。

// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]

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
  var p = head;
  var prev = null;

  while (p && p.next) {
    if (p.val === p.next.val) {
      var p2 = p.next;
      while (p2 && p.val === p2.val) {
        p2 = p2.next;
      }

      if (!prev) {
        // 从一开始就一直在重复
        p = head = p2;
      } else {
        prev.next = p2;
        p = p2;
      }
    } else {
      prev = p;
      p = p.next;
    }
  }

  return head;
};

module.exports = { deleteDuplicates };
