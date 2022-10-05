function getSum(a, b) {
    let carry = 1;
    while (carry != 0) {
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}