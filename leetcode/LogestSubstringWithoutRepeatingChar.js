// Given a string s, find the length of the longest 
// substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
function lengthOfLongestSubstring(s) {
    let max = 0;
    let begin = 0;
    let end = 0;
    let map = {};

    for (let i = end; end < s.length; end++) {
        if (map[s[end]] !== undefined && map[s[end]] >= begin) { // already saw this char
            begin = map[s[end]] + 1;
        }
        
        map[s[end]] = end;  
        max = Math.max(max, end - begin + 1);
    }
    return max;
}


lengthOfLongestSubstring('abcabcbb');

