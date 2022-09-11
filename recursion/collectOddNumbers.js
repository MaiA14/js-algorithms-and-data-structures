// first solution
function collectOddNumbers(arr) {
    const oddNumbers = [];
    
    function helper(helperInput) {
        if (helperInput.length == 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            oddNumbers.push(helperInput[0]);
        }

        helper(helperInput.slice(1));

    }

    helper(arr);
    return oddNumbers;   
}

console.log(collectOddNumbers([1,2,3]));

// second solution
function collectOddNumbers2(arr) {
    let oddNumbers = [];

    if (arr.length === 0) {
        return oddNumbers;
    }

    if (arr[0] % 2 !== 0) {
        oddNumbers.push(arr[0]);
    }

    oddNumbers = oddNumbers.concat(collectOddNumbers(arr.slice(1)));
    return oddNumbers;
}