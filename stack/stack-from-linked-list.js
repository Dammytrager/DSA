class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class StackFromLinkedList {
    constructor() {
        this.top = null
        this.length = 0
        this.skeleton = null
    }

    peek() {
        return this.top
    }

    push(value) {
        const node = new Node(value);

        if (this.top === null) {
            this.bottom = node
        } else {
            this.top.next = node
        }

        this.length++
        this.top = node

    }

    pop() {
        let skeleton = this.bottom;
        let successor = null;

        while (skeleton.next !== null) {
            successor = skeleton
            skeleton = skeleton.next
        }

        successor.next = null
        this.top = successor
        this.length--
    }

    toArray() {
        const result = [];
        let skeleton = this.bottom;

        while (skeleton !== null) {
            result.push(skeleton.value)
            skeleton = skeleton.next
        }

        return result;
    }
}

const myStack = new StackFromLinkedList();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.push('twitter')

console.log(myStack)
console.log(myStack.toArray())