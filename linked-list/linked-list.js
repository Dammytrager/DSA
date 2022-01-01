class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value)
        }

        const leaderNode = this.traverseToIndex(index - 1);
        const breakOffNode = leaderNode.next;

        leaderNode.next = new Node(value, breakOffNode);
        this.length++;

        return this;

    }

    remove(index) {
        if (index === 0) this.head = this.head.next // Removing the head
        else {
            // the node before the node to be remove
            const leaderNode = this.traverseToIndex(index - 1);

            // if the node at the index to be remove is the tail
            // set the next node of the prev item to null
            leaderNode.next = index === this.length - 1 ? null : leaderNode.next.next;
            if (index === this.length - 1) this.tail = leaderNode
        }
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }

    reverse() {
        // const flattenedList = this.printList();
        // this.head = this.tail;
        // this.length = 1;
        //
        // for (let i = flattenedList.length - 2; i >= 0; i--) {
        //     this.append(flattenedList[i])
        // }
        //
        // return this;

        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
        this.tail.next = null;
    }

}

let myLinkedList = new LinkedList(10);
// console.log(myLinkedList.printList());
myLinkedList.append(5)
// console.log(myLinkedList.printList());
myLinkedList.append(15)
// console.log(myLinkedList.printList());
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(0, 100)
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList);



