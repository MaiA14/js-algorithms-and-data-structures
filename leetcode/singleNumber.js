var singleNumber = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    for (let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
};