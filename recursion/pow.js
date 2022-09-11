function power(num, pow) {
    if (pow === 0) {
        return 1;
    }

    if (num === 0) {
        return 0;
    }

    return num * power(num, pow - 1)
}





