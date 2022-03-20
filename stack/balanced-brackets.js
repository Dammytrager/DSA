// https://www.hackerrank.com/challenges/balanced-brackets/problem

/**
 * Returns 'YES' if the brackets are balanced otherwise it returns 'NO'
 * e.g `isBalanced('{[()]}')` - YES
 *
 * @param s
 * @returns {string|string}
 */
function isBalanced(s) {
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]
        if (bracket === '{' || bracket === '(' || bracket === '[') arr.push(bracket)

        else {
            if (bracket === '}' && arr.pop() !== '{') return 'NO'
            if (bracket === ')' && arr.pop() !== '(') return 'NO'
            if (bracket === ']' && arr.pop() !== '[') return 'NO'
        }
    }

    return !!arr.length ? 'NO' : 'YES'
}

const str = '{{[[(())]]}}'
console.log(isBalanced(str))