// Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that
// contains the same characters, only the order of characters can be different. 
// For example, “abcd” and “dabc” are an anagram of each other.

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

// my method
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let str1Frequency = createFrequencyCounter(str1);

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!str1Frequency[letter]) {
            return false;
        } else {
            str1Frequency[letter] -= 1;
        }
    }

    return true;
}


function runTests() {
    console.log('Tests: ');
    const t1 = isAnagram(" ", " ");
    const t2 = isAnagram("aaz", "aza");
    const t3 = isAnagram("abcc", "abc");

    console.log('t1', t1);
    console.log('t2', t2);
    console.log('t3', t3);
}

runTests();