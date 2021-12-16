// https://www.hackerrank.com/challenges/sparse-arrays/problem

/**
 * @param strings {string[]}
 * @param queries {string[]}
 */
function matchingStrings(strings, queries) {
    return queries.map((item, index) => {
        let count = 0
        for (let i = 0; i < strings.length; i++) {
            if (strings[i] === item) count++
        }
        return count
    })
}

const strings = ['aba', 'baba', 'aba', 'xzxb']
const queries = ['aba', 'xzxb', 'ab']

console.log(matchingStrings(strings, queries))