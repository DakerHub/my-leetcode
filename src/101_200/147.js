const { ListNode, toString } = require('./../../util/linkedList/LinkedList');
// 147. 对链表进行插入排序
// 插入排序算法：

// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。

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
var insertionSortList = function (head) {
  var l1 = new ListNode(Number.NEGATIVE_INFINITY, null),
    l2 = new ListNode(0, head),
    p1 = l1.next,
    prev1 = l1;

  while (l2.next) {
    prev1 = l1;
    p1 = prev1.next;

    var p2 = l2.next;
    while (p1 && p2.val > p1.val) {
      prev1 = p1;
      p1 = prev1.next;
    }

    var tmp = p2;
    l2.next = p2.next;

    tmp.next = p1;
    prev1.next = tmp;
  }

  return l1.next;
};

module.exports = { insertionSortList };
