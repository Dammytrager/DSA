/**
 * FInd the overall sum of a 2D array
 *
 * @param array
 * @returns {number}
 */
function sumOf2DArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].reduce((a, b) => a + b, 0);
    }

    return sum;
}

const arr = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]

console.log(sumOf2DArray(arr))
