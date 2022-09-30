 
var firstUniqChar = function(s) {
    let seen = {};
    let str = [...s];

    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]] +=1;
        } else {
            seen[s[i]] = 1;
        }
    }
    
   for( let i = 0; i < s.length; i++) {
    const stringLetter = s[i]
    if (seen[stringLetter] === 1) {
        return i
    }
  }

  return -1
};