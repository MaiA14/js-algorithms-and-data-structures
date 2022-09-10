// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input: sameFrequency(182,281)  true


function collectDigits(num) {
    let arr = [];
    while (num) {
        let digit = num % 10;
        num = Math.floor(num / 10)
        arr.push(digit);
    }
    return arr;
}

// console.log('collectDigits', collectDigits(182));

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

function sameFrequency(num1, num2) {
    let arr1 = collectDigits(num1);
    let arr2 = collectDigits(num2);

    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyFirstArr = createFrequencyCounter(arr1);
    const frequencySecondArr = createFrequencyCounter(arr2);

    for (let key in frequencyFirstArr) {
        if (!(key in frequencySecondArr)) {
            return false;
        }

        if (frequencySecondArr[key] !== frequencyFirstArr[key]) {
            return false;
        }

        return true;
    }
}

console.log(sameFrequency(181, 811));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
