// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 *
 * @param s {string}
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0

    let result = 1;
    let substring = '';
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (substring.includes(char)) {
            substring = s.slice(obj[char], i + 1)
        } else {
            substring = substring + char;
            result = Math.max(result, substring.length)
        }
        obj[char] = i + 1;
    }

    return result
}

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s))