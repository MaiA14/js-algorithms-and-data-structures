// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    let temp = 0;
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        if (temp in map) {
            return [map[temp], i];
        }
        map[nums[i]] = i;
    }
}

// nums = [2,7,11,15], target = 9