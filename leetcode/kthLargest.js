var KthLargest = function (k, nums) {
    this.queue = new MinPriorityQueue({ priority: (val) => val });
    this.k = k;

    for (const num of nums) {
        this.queue.enqueue(num);
    }
    while (this.queue.size() > k) {
        this.queue.dequeue();
    }
};

KthLargest.prototype.add = function (val) {
    this.queue.enqueue(val);

    if (this.queue.size() > this.k) {
        this.queue.dequeue();
    }

    return this.queue.front().element;
};