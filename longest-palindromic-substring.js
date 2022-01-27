/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome (s) {
    if (s.length === 0) return '';

    let result = '';
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const subString = result + char
        if (isPalindrome(subString)) {
            result = result.length > subString.length ? result : subString;
        }
    }
}

function isPalindrome(string) {
    return [...string].reverse().join('') === string
}