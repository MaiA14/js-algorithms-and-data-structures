// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// [1,2,3] [4,1,9] true
// [1,2,3], [1,9] false
// [1,2,1] [4,4,1] false

// my method
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

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let firstArrFrequency = createFrequencyCounter(arr1);
    let secondArrFrequency = createFrequencyCounter(arr2);

    for (let key in firstArrFrequency) {
        if (!(key ** 2 in secondArrFrequency)) {
            return false;
        }

        if (secondArrFrequency[key ** 2] !== firstArrFrequency[key]) {
            return false;
        }
    }

    return true;
}

function runTests() {
    console.log('Tests: ');
    const t1 = same([1, 2, 3], [4, 1, 9]);
    const t2 = same([1, 2, 3], [1, 9]);
    const t3 = same([1, 2, 1], [4, 4, 1]);

    console.log('t1', t1);
    console.log('t2', t2);
    console.log('t3', t3);
}

runTests();

// naive
function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexof(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
        return true;
    }

    return true;
}