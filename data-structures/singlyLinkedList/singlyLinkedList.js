
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(n)
    push(val) {
        let newNode = new Node(val);
        // empty list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length--;
        // there was only one item in list
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    shift() {
        if (!this.head)
            return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = head;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.length++;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            counter = counter.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let requestedNode = this.get(index);
        if (!requestedNode)
            return false;
        requestedNode.val = val;
        return true;c
    }

    size() {
        if (this.length === 0)
            return 0;
        return this.length;
    }

    pop() {
        if (!this.head) // this.length === 0
            return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }


}

let list = new SinglyLinkedList();
list.push("Hi");
console.log('list ', list);