// 142. 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

// 说明：不允许修改给定的链表。

// 进阶：

// 你是否可以使用 O(1) 空间解决此题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 使用集合记录访问过的节点，第一个重复的节点就是环路起点
 * 时间 O(n) 空间 O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var m = new Set(),
    p = head;

  while (p) {
    if (m.has(p)) {
      return p;
    }

    m.add(p);
    p = p.next;
  }

  return null;
};

/**
 * 快慢指针找到相遇点时，此时从相遇点到环路起点和从头节点到环路节点的距离一样
 * 所以再找第二个相遇点就是了
 *
 * 时间 O(n) 空间 O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function (head) {
  var p1 = (p2 = p3 = head);

  while (p2 && p2.next) {
    p2 = p2.next.next;
    p1 = p1.next;

    if (p2 === p1) {
      while (p3 !== p2) {
        p3 = p3.next;
        p2 = p2.next;
      }

      return p3;
    }
  }

  return null;
};
