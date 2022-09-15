class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.first.next = null;
            this.last = newNode;
        } else {
            this.first.next = newNode;
            this.last = newNode;
        }

        ++this.size;
    }

    dequeue() {
        if (!this.first) {
            return undefined;
        }

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}