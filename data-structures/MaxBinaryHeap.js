class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const value = this.values[index];
        while (true) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element < parent) {
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
                if (leftChild > value) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (swap === null && rightChild > value ||
                    swap === null && rightChild > leftChild) {
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

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        if (this.values.length > 0) {
            this.sinkDown();
            return max;
        }
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);