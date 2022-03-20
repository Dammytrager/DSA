/**
 * Definition for singly-linked list.
 **/
 function ListNode(val, next = undefined) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeSortedList (list1, list2) {
    let result = new ListNode(0),
        follower = result,
        list1Pointer, list2Pointer, next;
    while (list1 !== null || list2 !== null) {
        list1Pointer = list1
        list2Pointer = list2

        if (list1Pointer === null) {
            next = list2Pointer.val
            list2 = list2.next
        } else if (list2Pointer === null) {
            next = list1Pointer.val
            list1 = list1.next
        } else {
            if (list1Pointer.val > list2Pointer.val) {
                next = list2Pointer.val
                list2 = list2.next
            } else {
                next = list1Pointer.val
                list1 = list1.next
            }
        }

        follower.next = new ListNode(next)
        follower = follower.next
    }

    return result.next
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

function listNodeToArray (head) {
    if (!head) return []

    const result = [];

    while (head !== null) {
        result.push(head.val)
        head = head.next
    }

    return result
}

const list1 = listNodeFromArray([1,2,4])
const list2 = listNodeFromArray([1,3,4])

const result = mergeSortedList(list1, list2)

console.log(listNodeToArray(result))
