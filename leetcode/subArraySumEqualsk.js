
function subarraySum(nums, k) {
    let sum = 0
    let count = 0
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(sum)) {
            map.set(sum, 1)
        } else {
            map.set(sum, map.get(sum) + 1)
        }

        sum += nums[i]

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
    }
    return count
};

let nums = [1, 1, 1];
let k = 2
console.log(subarraySum(nums, k))
