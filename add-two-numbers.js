function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersFake = function(l1, l2) {
  let maxLength = l1.length > l2.length ? l1.length : l2.length;

  let acc1 = 0;
  let acc2 = 0;

  for (var i = 0; i < maxLength; i++) {
    let multiplicator = 10**i
  
    if (l1[i]) {
      acc1 = acc1 + (l1[i] * multiplicator);
    }

    if (l2[i]) {
      acc2 = acc2 + (l2[i] * multiplicator);
    }
  }

  let sum = acc1 + acc2;
  let digits = [];

  while (sum > 0) {
    let digit = sum % 10;
    digits.push(digit);
    sum = Math.floor(sum / 10);

    if (sum === 0) {
      return digits;
    }
  }

  return digits;
};

// let list1 = [2,4,3] 
// let list2 = [5,6,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  let result = new ListNode();
  
  let total = 0;
  let carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total = total + l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total = total + l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);
    result.next = new ListNode(num);
    result = result.next;
  }

  return result;
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(list1, list2);

console.log("result:\n", result);