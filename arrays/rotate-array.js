// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    const rotateTimes = k % nums.length
    let sliced = nums.slice(0, nums.length - rotateTimes);
    nums.splice(0, nums.length - rotateTimes);
    sliced.forEach(item => nums.push(item))
}


const array = [1,2,3,4,5,6,7];
const k = 3;
rotate(array, k)
