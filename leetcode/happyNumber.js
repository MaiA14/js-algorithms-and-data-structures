const isHappy = (number) => {
    let slow = number;
    let fast = getNextSum(number);
    while(fast !== 1 && slow !== fast) {
        slow = getNextSum(slow);
        fast = getNextSum(getNextSum(fast));
    }
    return fast === 1;
}

const getNextSum = (number) => {
    let sum = 0;
    while(number > 0) {
        let digit = number % 10;
        sum += digit * digit;
        number = Math.floor(number / 10);
    }
    return sum;
}