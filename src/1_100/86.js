/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var small = new ListNode(-1, null),
    seninel = new ListNode(-1, head),
    smallTail = small,
    cur = head,
    prev = seninel;
  while (cur) {
    if (cur.val < x) {
      smallTail.next = cur;
      smallTail = cur;

      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  smallTail.next = seninel.next;
  return small.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = { partition };
