class QueueFromArray {
    constructor() {
        this.base = []
    }

    peek() {
        return this.base[0]
    }

    enqueue(value) {
        this.base.push(value)
    }

    dequeue() {
        this.base.shift()
    }

    toArray() {
        return this.base
    }
}

const myQueue = new QueueFromArray();
myQueue.enqueue('google')
myQueue.enqueue('udemy')
myQueue.enqueue('discord')
myQueue.enqueue('twitter')

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

