function createFrequencyCounter(arr) {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]] += 1;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let str1Frequency = createFrequencyCounter(s);

    for (let i = 0; i < t.length; i++) {
        let letter = t[i];
        if (!str1Frequency[letter]) {
            return false;
        } else {
            str1Frequency[letter] -= 1;
        }
    }

    return true;
};