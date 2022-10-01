/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function (digits) {

    if (digits == "") {
        return [];
    }
    let table = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    let res = [];
    let que = [''];

    while (que.length > 0) {
        let str = que[0];
        que.shift();

        if (str.length == digits.length) {
            res.push(str); 
        } else {       
            let s = Number(digits.charAt(str.length));
            let val = table[s]; 

            for (i = 0; i < val.length; i++) {
                que.push(str + val.charAt(i));
            }
        }
    }

    return res;
};