// https://leetcode.com/problems/two-sum/solution/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const obj = {};
    let result;
    nums.forEach((item, index) => {
        if (obj[item] !== undefined) {
            result = [...[obj[item], index]]
            nums.length = index + 1;
        } else {
            obj[target - item] = index
        }
    })

    return result;
}


const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target))
