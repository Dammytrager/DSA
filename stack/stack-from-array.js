class StackFromArray {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    push(value) {
        this.array.push(value)
        return this;
    }

    pop() {
        this.array.pop()
        return this
    }

    toArray() {
        return this.array
    }
}