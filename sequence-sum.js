function sequenceSum(i, j, k) {
    let sum = 0;
    for (let p = i; p <= j; p++) {
        sum += p
    }

    for (let q = j - 1; q >= k; q--) {
        sum += q;
    }

    return sum
}

function firstRepeatedWord(sentence) {
    let formatted = sentence.replace(/,/g, ' ')
        .replace(/\./g, ' ')
        .replace(/:/g, ' ')
        .replace(/;/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\s\s+/g, ' ');


    formatted = formatted.split(' ');


    const obj ={};

    for (let i = 0; i < formatted.length; i++) {
        if (obj[formatted[i]] !== undefined) {
            return formatted[i]
        }

        obj[formatted[i]] = true
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function deleteProduct(ids, m) {
    const obj = {};

    for (let i = 0; i < ids.length; i++) {
        if (obj.hasOwnProperty(ids[i])) obj[ids[i]]++
        else obj[ids[i]] = 1
    }

    const values = getMin(obj, m);

    return values
}

const getMin = (obj, m) => {
    const values = Object.values(obj);
    const minVal = Math.min(...values)
    const diff = m - minVal
    const key = Object.keys(obj).find(key => obj[key] === minVal);
    const newObj = {...obj}
    if (diff > 0) {
        delete newObj[key.toString()];
        return getMin(newObj, diff)
    }

    else {
        if (diff === 0) delete newObj[key.toString()];
        return Object.keys(newObj).length
    }
}

function goodSegment(badNumbers, lower, upper) {
    let result = 0;
    let presentCount = 0;

    for (let i = lower; i <= upper; i++) {
        if (badNumbers.includes(i)) {
            result = Math.max(result, presentCount)
            presentCount = 0;
        }
        else {
            presentCount++
            result = Math.max(result, presentCount)
        }
    }

    return result;
}

function goodSegment2(badNumbers, lower, upper) {
    badNumbers.sort((a, b) => a - b);
    let pivot = 1;
    let result = 0;
    badNumbers.forEach((item, index) => {
        result = Math.max(result, item - pivot)
        console.log(result)
        pivot = item + 1
    })

    return result

}


// const badNumbers = [37, 7, 22, 15, 49, 60];
const badNumbers = [ 5, 4, 2, 15 ]
const lower = 1
const upper = 10


console.log(goodSegment2(badNumbers, lower, upper));

