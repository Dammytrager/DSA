// https://leetcode.com/problems/consecutive-characters/

/**
 *
 * @param s {string}
 * @returns {number}
 */
function maxPower(s) {
    let max = 0;
    let count = 0;
    let current = '';
    [...s].forEach((character, index) => {
        if (character !== current) {
            current = character;
            count = 1;
        } else {
            count += 1;
        }

        if (count > max) max = count
    })

    return max
}

const s = 'tourist'

console.log(maxPower(s))