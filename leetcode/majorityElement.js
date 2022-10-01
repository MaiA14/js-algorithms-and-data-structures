var majorityElement = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    let max = {freq: 0, val: 0};
    for (let key in map) {
        if (map[key] > max.freq) {
            max.freq = map[key];
            max.val = key;
        }
    }
    return max.val;
};