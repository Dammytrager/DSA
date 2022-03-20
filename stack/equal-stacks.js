// https://www.hackerrank.com/challenges/equal-stacks/problem

/**
 *
 * @param h1 {array}
 * @param h2 {array}
 * @param h3 {array}
 * @returns {number}
 */
function equalStacks(h1, h2, h3) {
    h1 = h1.reverse();
    h2 = h2.reverse();
    h3 = h3.reverse();

    let h1Sum = sum(h1), h2Sum = sum(h2), h3Sum = sum(h3);
    let min = Math.min(h1Sum, h2Sum, h3Sum)
    while ((h1Sum !== h2Sum) || (h2Sum !== h3Sum)) {
        min = Math.min(h1Sum, h2Sum, h3Sum)

        if (h1Sum > min) h1Sum = h1Sum - h1.pop()
        if (h2Sum > min) h2Sum = h2Sum - h2.pop()
        if (h3Sum > min) h3Sum = h3Sum - h3.pop()
    }

    return min
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}


const h1 = [1]
const h2 = [1]
const h3 = [1]

console.log(equalStacks(h1, h2, h3))