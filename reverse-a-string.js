/**
 * Reverse a String
 *
 * @param str {string}
 * @returns {string}
 */
function reverseString1(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}

const str = 'abcd';
console.log(reverseString1(str))
