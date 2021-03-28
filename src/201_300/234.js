const { ListNode, toString } = require('./../../util/linkedList/LinkedList');
// 234. 回文链表

// 请判断一个链表是否为回文链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 栈解法
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var t = head,
    len = 0,
    i = 0,
    isOdd = false,
    stack = [];

  while (t) {
    t = t.next;
    len++;
  }

  isOdd = len % 2 !== 0;

  t = head;

  while (t) {
    if (isOdd && i === Math.floor(len / 2)) {
    } else if (i < len / 2) {
      stack.push(t.val);
    } else if (stack.pop() !== t.val) {
      return false;
    }

    t = t.next;
    i++;
  }

  return true;
};

// 快慢指正找到中点
// 反转后半部分
// 快慢指正比较
// 将后半部分还原
var isPalindrome2 = function (head) {
  var fp = head,
    fprev = new ListNode(0, head),
    sp = head,
    mp = null;

  while (sp && sp.next) {
    fprev = fp;
    fp = fp.next;
    sp = sp.next.next;
  }
  mp = fp;

  var reverseList = (head) => {
    if (!(head && head.next)) {
      return head;
    }

    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  };

  fprev.next = reverseList(fprev.next);
  fp = head;
  sp = fprev.next;

  while (fp !== fprev.next) {
    if (fp.val !== sp.val) {
      return false;
    }
    fp = fp.next;
    sp = sp.next;
  }

  fprev.next = reverseList(fprev.next);
  return true;
};

module.exports = { isPalindrome, isPalindrome2 };
