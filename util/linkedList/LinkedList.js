function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class LinkedList {
  head = null;
  constructor() {}

  insert(node) {
    node.next = this.head;
    this.head = node;
  }

  toString() {
    let current = this.head;
    const keys = [];
    while (current !== null) {
      keys.push(current.val);
      current = current.next;
    }

    return keys.join(' -> ');
  }
}

function toLinkedList(vals) {
  const l = new LinkedList();
  for (let i = vals.length - 1; i >= 0; i--) {
    l.insert(new ListNode(vals[i]));
  }

  return l;
}

function toString(head) {
  if (!head) {
    return '';
  }

  const keys = [];
  while (head !== null) {
    keys.push(head.val);
    head = head.next;
  }

  return keys.join(' -> ');
}

module.exports = { toLinkedList, toString };
