// https://www.hackerrank.com/challenges/new-year-chaos/problem

/**
 *
 * @param {array<number>} q
 */
function minimumBribes(q) {
    let bribes = 0;
    for (let i = 0; i < q.length; i++) {
        const bribeMove = q[i] - i - 1
        if (bribeMove > 2) return 'Too chaotic'
        else if (bribeMove > 0) bribes += bribeMove;
    }

    return bribes;
}

const arr = [1, 2, 5, 3, 7, 8, 6, 4];
console.log(minimumBribes(arr))
