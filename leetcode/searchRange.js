var searchRange = function (nums, target) {
    return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};

const findFirstOccurrence = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let firstOccurrence = -1;
    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            firstOccurrence = middle;
            right = middle - 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return firstOccurrence;
};

const findLastOccurrence = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let lastOccurrence = -1;

    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            lastOccurrence = middle;
            left = middle + 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return lastOccurrence;
};