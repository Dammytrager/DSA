// https://www.hackerrank.com/challenges/2d-array/problem

/**
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 *
 * @param {array[]} arr
 * @returns {number}
 */
function hourglassSum(arr) {
    let max = -Infinity;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            max = Math.max(sum, max);
        }
    }

    return max
}

const array1 = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

const array2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(array2))
