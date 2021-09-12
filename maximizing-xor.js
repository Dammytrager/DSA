// https://www.hackerrank.com/challenges/maximizing-xor/problem

function maximizingXor(l, r) {
    let max = 0;

    for (let i = l; i <= r; i++) {
        for (let j = l; j <= r; j++) {
            const value = i ^ j;
            max = value > max ? value : max
        }
    }

    return max;
}

const l = 5;
const r = 6;
console.log(maximizingXor(l, r))
