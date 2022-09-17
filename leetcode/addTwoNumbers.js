// You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    while (l1.length > 0 || l2.length > 0 || carry) {
        let carry = 0;
        let previousNode = new ListNode();
        const headNode = previousNode;

        while (l1 || l2 || carry) {
            let val1 = 0;
            let val2 = 0;

            if (l1) {
                val1 = l1.val;
                l1 = l1.next;
            }
            if (l2) {
                val2 = l2.val;
                l2 = l2.next;
            }

            const sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10); 
            const digit = sum % 10;
            const currentNode = new ListNode(digit);
            previousNode.next = currentNode;
            previousNode = currentNode;
        }
        return headNode.next;
    }
}