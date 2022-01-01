class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value, this.tail)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, null, this.head);
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return this;
    }

    printList() {
        const result = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result;
    }

    traverseToIndex(index) {
        if (index >= this.length / 2) return this._traverseFromBack(index);
        else return this._traverseFromFront(index);
    }

    _traverseFromFront(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode
    }

    _traverseFromBack(index) {
        let currentNode = this.tail;
        let counter = this.length - 1;
        while (counter !== index) {
            currentNode = currentNode.prev
            counter--;
        }
        return currentNode
    }

    insert(value, index) {
        if (index === 0 ) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        const leaderNode = this.traverseToIndex(index - 1);
        const breakOffNode = leaderNode.next;
        const newNode = new Node(value, leaderNode, breakOffNode);
        breakOffNode.prev = newNode;
        leaderNode.next = newNode;
        this.length++

        return this;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
        } else {
            const leaderNode = this.traverseToIndex(index - 1);
            if (index === this.length - 1) {
                leaderNode.next = null
                this.tail = leaderNode
            } else {
                leaderNode.next = leaderNode.next.next
                leaderNode.next.prev = leaderNode
            }
        }
        this.length--;
        return this;
    }

    reverse() {
        const flattenedList = this.printList();
        this.head = this.tail;
        this.head.prev = null;
        this.length = 1;

        for (let i = flattenedList.length - 2; i >= 0; i--) {
            this.append(flattenedList[i])
        }

        return this;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(2)

myDoublyLinkedList.append(4)
myDoublyLinkedList.append(6)
myDoublyLinkedList.append(10)

myDoublyLinkedList.prepend(0)

myDoublyLinkedList.insert(8, 4)

console.log(myDoublyLinkedList.printList())

myDoublyLinkedList.reverse();

console.log(myDoublyLinkedList.printList())









