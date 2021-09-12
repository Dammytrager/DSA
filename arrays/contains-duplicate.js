// https://leetcode.com/problems/contains-duplicate/description/


/**
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
function containsDuplicate(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) return true;
        else obj[arr[i]] = true;
    }
    return false;
}

const arr = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(arr))
