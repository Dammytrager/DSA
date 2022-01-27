/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays (nums1, nums2) {
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


}

const arr1 = [1, 2]
const arr2 = [1, 2]

console.log(findMedianSortedArrays(arr1, arr2))