// https://leetcode.com/problems/add-two-numbers/

// Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = val === undefined ? 0 : val
     this.next = next === undefined ? null : next
 }

 function listNodeFromArray(arr) {
    if (!arr.length) return;

    let tail = new ListNode(arr[0], undefined);
    let listNode = tail;

    for (let i = 1; i < arr.length; i++) {
        tail.next = new ListNode(arr[i], undefined);
        tail = tail.next
    }

    return listNode;
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let tail = new ListNode((l1.val + l2.val) % 10, undefined)
    let result = tail;
    let overflow = l1.val + l2.val >= 10 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;

    while (l1 !== null || l2 !== null) {
        let node1Val = 0, node2Val = 0;

        if (l1 !== null) {
            node1Val = l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            node2Val = l2.val
            l2 = l2.next
        }

        const sum = node1Val + node2Val + overflow
        tail.next = new ListNode(sum % 10, undefined)
        tail = tail.next
        overflow = sum >= 10 ? 1 : 0;
    }

    if (overflow) {
        tail.next = new ListNode(overflow, undefined)
    }


    return result;
}

const l1 = listNodeFromArray([1,2,3])
const l2 = listNodeFromArray([9,9,9])

console.log(addTwoNumbers(l1, l2))