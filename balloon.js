function solution(S) {
    const obj = {B: 0, A: 0, L: 0, O: 0, N: 0}

    for (let i = 0; i < S.length; i++) {
        let char = S[i]
        if (Object.keys(obj).includes(char)) {
            obj[char] += 1
        }
    }

    obj['L'] = Math.floor(obj['L'] / 2)
    obj['O'] = Math.floor(obj['O'] / 2)

    return Math.min(...Object.values(obj))
}

console.log(solution('BAOLLNNOLOLGBAX'))