/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var seninel = new ListNode(-1, head),
    cur = head,
    pre = seninel;
  while (cur) {
    if (cur.val == val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }

    cur = cur.next;
  }

  return seninel.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = { removeElements };
