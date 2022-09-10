function countDown(num) {
    if (num < 0)
        return;
    console.log(num);
    countDown(num - 1);
}

console.log(countDown(5));