// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let j = 0;
    while (j < nums.length) {
        let i = 0;
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0)
            j++;
        } else {
            i++; j++;
        }
    }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr)
