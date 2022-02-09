// https://leetcode.com/problems/longest-common-prefix/


/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        for (let s of strs) {
            if (s[i] !== firstStr[i]) return s.slice(0, i);
        }
    }

    return strs[0];
}


const strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))