function solution(words, variable) {
    let startIndex = 0
    let brokenWords = []

    for (let i = 0; i <= variable.length; i++) {
        if (i === variable.length || variable[i] === variable[i].toUpperCase()) {
            const word = variable.slice(startIndex, i).toLowerCase();
            if (word) brokenWords.push(word);
            startIndex = i
        }
    }

    return brokenWords.every(function (item) {
        return words.includes(item)
    })
}

const words = ['is', 'valid', 'right']
const variable = 'IsIsValid'

console.log(solution(words, variable))