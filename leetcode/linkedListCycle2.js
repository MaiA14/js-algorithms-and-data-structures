/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function detectCycle(head) {
    let slow = head;
    let fast = head;
    let isCycle = false;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            isCycle =  true;
            break;
        }
    }

     if (isCycle)
      {
        let slow2 = head;
        while (slow != slow2)
        {
          slow = slow.next;
          slow2 = slow2.next;
        }
        return slow;
      }

      return null;
};