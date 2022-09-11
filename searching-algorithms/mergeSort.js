function merge(arr1, arr2) {
    let mergedArr = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            mergeSort.push(arr1[i]);
            i++;
        } else {
            mergeSort.push(arr2[j]);
            j++;
        }
    }

    // there are still values in arr1
    while (i < arr1.length) {
        mergeSort.push(arr1[i]);
        i++;
    }

    // there are still values in arr2
    while (j < arr2.length) {
        mergeSort.push(arr2[j]);
        i++;
    }

    return mergedArr;
}

function mergeSort1(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}