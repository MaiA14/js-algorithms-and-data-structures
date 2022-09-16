// memo - bottom to top
function fibo_memo(n, memo = []) {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    let res = fibo(n - 1) + fibo(n - 2);
    memo[n] = res;
    return res;
}

// tabulation - top to bottom
function fib_table(n) {
    if (n <= 2) {
        return 1;
    }
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}