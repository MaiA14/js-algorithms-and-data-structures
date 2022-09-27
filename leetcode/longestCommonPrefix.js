/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    let longestPrefix = "";
    
    if (strs.length === 0) {
        return longestPrefix;
    }
    
    let minLength = Number.MAX_VALUE;
    
    // find minum length of string
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
        }
    }
    
    // look for substring where max length is minimum string length we found before
    for (let i = 0; i < minLength; i++) {
        let current = strs[0][i];
        
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                return longestPrefix;
            }
        }
         longestPrefix += current;
    }
    
    return longestPrefix;    
};