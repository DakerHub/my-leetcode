// 725. 分隔链表

// 给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。

// 这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。

// 返回一个符合上述规则的链表的列表。

// 举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  var l = [],
    base = 0,
    highest = 0,
    len = 0,
    cur = root;

  while (cur) {
    len++;
    cur = cur.next;
  }

  base = Math.floor(len / k);
  highest = len % k;

  cur = root;
  for (let i = 0; i < k; i++) {
    if (!cur) {
      l[i] = null;
      continue;
    }

    var head = cur;
    var h = i < highest ? base : base - 1;
    for (let j = 0; j < h; j++) {
      cur = cur.next;
    }

    l[i] = head;
    var tail = cur;
    cur = cur.next;
    tail.next = null;
  }

  return l;
};

module.exports = { splitListToParts };
