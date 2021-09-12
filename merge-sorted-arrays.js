/**
 * receives two sorted arrays and returns a merged sorted array
 *
 * @param arr1 {array}
 * @param arr2 {array}
 * @returns {array}
 */
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i <= arr1.length - 1 || j <= arr2.length - 1) {
        if (j >= arr2.length || arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++
        } else if ((i >= arr1.length || arr2[j] <= arr1[i])) {
            result.push(arr2[j]);
            j++;
        }
    }

    return  result;
}


const arr1 = [0, 3,4, 31];
const arr2 = [4, 6, 30];

console.log(mergeSortedArrays(arr1, arr2));
