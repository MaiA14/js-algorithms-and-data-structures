/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Sort the array
    nums.sort((a, b) => a - b);;
    // Resultant list
    const triplets = [];
    // Loop for each element of the array
    for (let i = 0; i < n; i++) {
        // Skip the duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // Left and right pointers
        let start = i + 1;
        let end = nums.length - 1;
        // Loop for all the remaining pairs
        while (start < end) {
            if (nums[i] + nums[start] + nums[end] === 0) {
                triplets.push([nums[i], nums[start], nums[end]]);
                start++;
                // Never let start refer to the same value twice (in an output) to avoid duplicates
                while (start < end && nums[start] === nums[start - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[start] + nums[end] < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return triplets;
};