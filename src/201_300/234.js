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

module.exports = { isPalindrome };
