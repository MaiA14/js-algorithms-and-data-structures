// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum == 0) {
            return [arr[start], arr[end]];
        } else if (sum > 0) {
            end--;
        } else {
            start++;
        }
    }
}

