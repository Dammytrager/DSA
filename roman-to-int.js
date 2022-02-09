// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const mapping = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const roman = s[i]

        if (i < s.length - 1) {
            if (roman === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
                result -= 1;
                continue
            } else if (roman === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
                result -= 10;
                continue;
            } else if (roman === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
                result -= 100;
                continue;
            }

        }

        result += mapping[roman]
    }

    return result
}

const roman = 'MCMXCIV'
console.log(romanToInt(roman))