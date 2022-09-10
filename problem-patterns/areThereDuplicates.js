// areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.


function frequencyCounter(arr) {
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


function areThereDuplicates() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    const frequency = frequencyCounter(arr);
    const objectValues = Object.values(frequency);

    for (let i = 0; i < objectValues.length; i++) {
        if (objectValues[i] > 1) {
            return true;
        }
    }

    return false;

}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));