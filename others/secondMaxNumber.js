const arr = [5, 7, 3, 2, 9, 20, 5];

function secondMaxNumber(arr) {
    let maxNumber = -Infinity;
    let secondMaxNumber = -Infinity;
    // first max number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    // Now find the second largest element
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > secondMaxNumber && arr[i] < maxNumber) {
            secondMaxNumber = arr[i];
        }
    }

    return secondMaxNumber;
}

console.log(secondMaxNumber(arr));