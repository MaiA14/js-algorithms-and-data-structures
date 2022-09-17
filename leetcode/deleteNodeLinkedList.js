var deleteNode = function (node) {
    let temp = node.next;
    node.val = node.next.val;
    node.next = node.next.next;
    temp.next = null;
};