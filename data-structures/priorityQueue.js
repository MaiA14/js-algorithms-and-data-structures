class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const value = this.values[index];
        while (true) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIndex] = value;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        let value = this.values[0];

        while (true) {
            let rightChildIndex = 2 * parentIndex + 1;
            let leftChildIndex = 2 * parentIndex + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < value.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild.priority < value.priority ||
                    swap === null && rightChild.priority < leftChild.priority) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }
            this.values[index] = this.values[swap];
            this.values[swap] = value;
            index = swap;
        }
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        if (this.values.length > 0) {
            this.sinkDown();
            return min;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let pq = new PriorityQueue();
pq.enqueue("common cold", 5);
pq.enqueue("gunshot cold", 1);
pq.enqueue("high fever", 4);