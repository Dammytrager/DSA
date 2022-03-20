class Node {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

class QueueFromLinkedList {
    constructor(value, next = null) {
        this.first = null
        this.last = null
    }

    peek() {
        return this.first.value
    }

    enqueue(value) {
        const node = new Node(value)

        if (this.first === null) { // Queue is empty
            this.first = node
            this.last = node
        } else {
            this.last.next = node;
            this.last = node
        }
    }

    dequeue() {
        if (this.first === null) {
            this.last = null
            return
        }
        let temp = this.first
        this.first = this.first.next
        temp = null
    }

    toArray() {
        const result = [];
        let skeleton = this.first

        while (skeleton !== null) {
            result.push(skeleton.value)
            skeleton = skeleton.next
        }

        return result;
    }
}

const myQueue = new QueueFromLinkedList();
myQueue.enqueue('google')
myQueue.enqueue('udemy')
myQueue.enqueue('discord')
myQueue.enqueue('twitter')


myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
