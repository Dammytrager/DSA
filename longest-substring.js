// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 *
 * @param s {string}
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0

    let result = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const subString = s.slice(i, j + 1)
            const noDuplicates = [...(new Set([...subString]))]
            if (noDuplicates.length === subString.length) result = Math.max(subString.length, result)
        }
    }

    return result
}

const s = 'pwwkew';
console.log(lengthOfLongestSubstring(s))