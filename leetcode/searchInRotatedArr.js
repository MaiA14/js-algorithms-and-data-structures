var search = function (nums, target) {

    if (nums.length == 0 || nums == null) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = nums.length - 1;

    if (nums[pivot] <= target && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        //console.log(mid , nums[mid] , target);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;

};