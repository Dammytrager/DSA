function encode(str) {
    let result = '';
    let count = 0;
    let char = '';

    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            count += 1
        } else {
            if (count !== 0) result += `${count}${char}`
            char = str[i]
            count = 1
        }

        if (i === str.length - 1) {
            result += `${count}${char}`
        }
    }

    return result
}

const str = 'aabaa'
console.log(encode(str))