// https://leetcode.com/problems/decode-string/

/**
 *
 * @param s {string}
 * @returns {string|*}
 */
function decodeString (s) {
    if (s.indexOf('[') === -1) {
        return s
    } else {
        let count = 0;
        let multiplier = 1;
        let clipStart;
        let clipEnd;
        let pre = '';
        let result;
        let numBase = '';
        const arr = [...s];
        for (let i = 0; i < s.length; i++) {
            const item = arr[i]
            if (!isNaN(item)) numBase += item
            if (item !== '[' && item !== ']' && !count && isNaN(item)) {
                pre += item
            }
            if (item === '[') {
                if (!count) {
                    clipStart = i + 1;
                    multiplier = numBase || 1
                }
                count++
            }
            if (item === ']') {
                count--
                if (count === 0) {
                    clipEnd = i
                    const subString = s.slice(clipStart, clipEnd);
                    const partialDecoded = pre + decodeString(subString).repeat(multiplier);

                    if (i === s.length - 1) result = partialDecoded
                    else {
                        const rest = decodeString(s.slice(clipEnd + 1))
                        result = partialDecoded + rest
                        break
                    }
                }
            }
        }

        return result;
    }
}

const s = "100[leetcode]";
console.log(decodeString(s))