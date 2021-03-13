const { toString } = require('./../../util/linkedList/LinkedList');
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
var oddEvenList = function (head) {
  var fast = head,
    seninel = new ListNode(-1, head),
    fastPrev = seninel,
    slow = seninel,
    count = 1;

  while (fast) {
    if (count % 2 === 1) {
      // 奇数，删除节点，放到慢节点后
      var tmp = fast;
      fastPrev.next = fast.next;
      fast = fast.next;
      // 这一步前缀节点必须特殊判断
      if (fastPrev === slow) {
        fastPrev = tmp;
      }

      tmp.next = slow.next;
      slow.next = tmp;
      slow = slow.next;
    } else {
      fastPrev = fastPrev.next;
      fast = fast.next;
    }

    count++;
  }

  return head;
};

var oddEvenList2 = function (head) {
  var l1 = new ListNode(-1, null),
    lt = l1,
    l2 = new ListNode(-1, head),
    cur = head,
    prev = l2,
    c = 1;

  while (cur) {
    if (c % 2 === 1) {
      prev.next = cur.next;
      lt.next = cur;
      lt = cur;
    } else {
      prev = cur;
    }

    c++;
    cur = cur.next;
  }

  lt.next = l2.next;

  return l1.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = { oddEvenList, oddEvenList2 };
