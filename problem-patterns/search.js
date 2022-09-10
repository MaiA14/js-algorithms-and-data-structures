// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1.

function serach(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let middle = (start + end) / 2;

        if (arr[middle] < num) {
            start = middle + 1;
        } else if (arr[middle] > num) {
            end = middle - 1;
        } else{
            return middle;
        }
    }

    return -1;
}