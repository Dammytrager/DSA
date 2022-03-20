// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem

function DoublyLinkedListNode (data = null, prev = null, next = null) {
    this.data = data
    this.prev = prev
    this.next = next
}

/**
 * @param llist {DoublyLinkedListNode}
 * @param data {number}
 */
function sortedInsert(llist, data) {
    const result = new DoublyLinkedListNode(0)
    let resultPointer = result
    let prevNode = result
    let pointer = llist
    let inserted = false


    while (pointer) {
        if (data < pointer.data && !inserted) {
            const newNode = new DoublyLinkedListNode(data, pointer)
            resultPointer.next = prevNode = newNode
            resultPointer = newNode
            inserted = true
        }

        const newNode = new DoublyLinkedListNode(pointer.data, prevNode)
        resultPointer.next = newNode
        resultPointer = newNode
        prevNode = newNode
        pointer = pointer.next
    }

    if (!inserted) {
        resultPointer.next = new DoublyLinkedListNode(data, prevNode)
    }

    result.next.prev = null
    return result.next
}

function doublyLinkedListFromArray(arr) {
    const result = new DoublyLinkedListNode(0)
    let pointerNode = result
    let prevNode = result

    arr.forEach((item, index) => {
        const newNode = new DoublyLinkedListNode(item, prevNode)
        pointerNode.next = newNode
        pointerNode = newNode
        prevNode = pointerNode

    })

    result.next.prev = null
    return result.next
}

function doublyLinkedListToArray(doublyLinkedList) {
    const result = []
    let pointer = doublyLinkedList

    while (pointer) {
        result.push(pointer.data)
        pointer = pointer.next
    }

    return result
}

const arr = [1,3,4,10]

const list = doublyLinkedListFromArray(arr)
const result = sortedInsert(list, 5)

console.log(doublyLinkedListToArray(result))