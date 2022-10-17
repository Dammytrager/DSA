// https://www.hackerrank.com/challenges/new-year-chaos/problem

/**
 *
 * @param {array<number>} q
 */
function minimumBribes(q) {
    let bribes = 0;
    for (let currentPosition = 0; currentPosition < q.length; currentPosition++) {
        const originalPosition = q[currentPosition] - 1
        const diff = originalPosition - currentPosition

        if (diff > 2) return console.log('Too chaotic')

        if (diff <= 0) {
            for (let i = Math.max(0, originalPosition - 1); i < currentPosition; i++) {
                const predecessorPosition = q[i] - 1;

                if (predecessorPosition > originalPosition) bribes++
            }
        }
    }

    return bribes;
}

const arr = [1, 2, 5, 3, 7, 8, 6, 4];
console.log(minimumBribes(arr))
