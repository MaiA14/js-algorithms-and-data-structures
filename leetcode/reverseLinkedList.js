function reverseLinkedList(head) {
    let current = head;
    let previous = null;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}