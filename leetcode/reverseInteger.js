function reverseInteger(x) {
    let rev = 0;
    let lastDigit;
    let sign = Math.sign(x);
    if (sign === -1) {
        x = Math.abs(x);
    }

     while (x != 0) {
        lastDigit = x % 10;
        rev = rev * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    
    return rev * sign;
}


console.log('rev ', reverseInteger(321));

