var lengthOfLastWord = function (s) {
    let tString = s.trim().split(' ')
    return tString[tString.length - 1].length
}; 