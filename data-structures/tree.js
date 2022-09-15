class Node {
    constructor() {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let curr = this.root;
            while (true) {
                if (value < curr.value) {
                    if (curr.left === null) {
                        curr.left = newNode;
                    } else {
                        curr = curr.left;
                    }
                    return this;
                } else if (value > curr.value) {
                    if (curr.right === null) {
                        curr.right = newNode;
                    } else {
                        curr = curr.right;
                    }
                    return this;
                }
            }
        }
    }

    contains(value) {
        if (!this.root) {
            return false;
        }

        let curr = this.root;
        let found = false;
        while (curr && !found) {
            if (value > curr) {
                if (cur.left === curr) {
                    curr = curr.left;
                }
            } else if (value < curr) {
                if (cur.right === curr) {
                    curr = curr.right;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            return data;
        }
    }

    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data;

    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(current);
        return data;
    
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            data.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data;
    
    }
}


let = new BinarySearchTree();
this.root = new Node(10);
this.root.right = new Node(15);
this.root.left = new Node(7);
this.root.left.right = new Node(9);