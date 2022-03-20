class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class StackFromLinkedList {
    constructor() {
        this.top = null;
    }

    peek() {
        return this.top.value
    }

    push(value) {
        const node = new Node(value)
        if (this.top === null) { // Stack is empty
            this.top = node;
        } else {
            node.next = this.top
            this.top = node
        }
    }

    pop() {
        if (this.top === null) return

        let temp = this.top
        this.top = temp.next
        temp = null
    }

    toArray() {
        const result = [];
        let skeleton = this.top;

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

myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
