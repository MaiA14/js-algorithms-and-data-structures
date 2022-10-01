function isPalindrom(s) {
    let start = 0;
    let end = s.length -1;
    
    while (start <= end) {
        if (s[start] !== s[end]) {
            return [start, end];
        } else {
            start++;
            end--;
            return true;
        }
    }
}

console.log(isPalindrom("abc"));