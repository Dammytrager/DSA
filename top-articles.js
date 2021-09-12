function getLargestString(s, k) {
    const obj = {}
    let result = '';
    let keep = 0;
    let keep2 = 0;
    s = s.split('')
    s.sort( (a, b) => {
        if (a > b) return -1;
        if (b > a) return 1;
        return 0;
    });
    s.forEach(item => {
        if (obj[item] !== undefined) obj[item]++
        else obj[item] = 1;
    });

    const arr = Object.keys(obj);

    for (let i = 0; i < arr.length; i++) {
        while (obj[arr[i]] > 0) {
            keep = obj[arr[i]] - k;
            obj[arr[i]] -= k;
            console.log(obj)
            result += arr[i].repeat(k);
            console.log(result)
            if (keep > 0 && i !== arr.length - 1) {
                obj[arr[i + 1]] -= k;
                result += arr[i + 1].repeat(k);
            }
        }
    }

    console.log(result)
}


getLargestString('zzzazz', 2)
