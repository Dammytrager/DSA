// Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd (head, n) {
    let reverseArr = listNodeToArray(head).reverse();
    let reverseListNode = listNodeFromArray(reverseArr);
    let leaderNode = reverseListNode;

    if (n === 1) {
        reverseListNode = leaderNode.next
    } else {
        for (let i = 1; i < n - 1; i++) {
            leaderNode = leaderNode.next
        }
        leaderNode.next = leaderNode.next.next
    }

    reverseArr = listNodeToArray(reverseListNode).reverse();
    return listNodeFromArray(reverseArr);
}

function listNodeToArray (head) {
    if (!head) return []

    const result = [];

    while (head !== null) {
        result.push(head.val)
        head = head.next
    }

    return result
}

function listNodeFromArray(arr) {
    if (!arr.length) return null;

    let tail = new ListNode(arr[0], undefined);
    let listNode = tail;

    for (let i = 1; i < arr.length; i++) {
        tail.next = new ListNode(arr[i], undefined);
        tail = tail.next
    }

    return listNode;
}

const listNode = listNodeFromArray([1,2,3,4,5])
const result = removeNthFromEnd(listNode, 3)

console.log(listNodeToArray(result))