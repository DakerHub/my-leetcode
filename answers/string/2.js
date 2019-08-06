/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const addTwoDigital = function(node1, node2, c = 0, listTail) {
    const d1 = (node1 && node1.val) || 0;
    const d2 = (node2 && node2.val) || 0;
    const sum = d1 + d2 + c;
    const nextC = Number.parseInt(sum / 10);
    const curVal = sum % 10;
    const node = new ListNode(curVal);
    listTail.next = node;
    if ((node1 && node1.next) || (node2 && node2.next) || nextC) {
      addTwoDigital(node1 && node1.next, node2 && node2.next, nextC, node);
    }
  };

  const head = new ListNode(undefined);
  addTwoDigital(l1, l2, 0, head);
  return head.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = addTwoNumbers;
