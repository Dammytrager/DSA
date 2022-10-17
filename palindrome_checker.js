function palindromeChecker(s, startIndex, endIndex, subs) {
  let result = '';

  for (let i = 0; i < startIndex.length; i++) {
    let start = startIndex[i];
    let end = endIndex[i];
    let sub = subs[i];

    const subString = s.slice(start, end + 1);
    let oddLeft = numOfOddChar(subString)
    for (let i = 1; i <= sub; i++) {
      oddLeft = Math.abs(oddLeft - 2)
    }

    result += oddLeft <= 1 ? '1' : '0';
  }

  return result;
}

function numOfOddChar(subStr) {
  const result = {};

  subStr.split('').forEach(char => {
    if (result.hasOwnProperty(char)) result[char]++;
    else result[char] = 1
  })

  let count = 0;
  Object.values(result).forEach(item => {
    if (item % 2 === 1) count++;
  })

  return count;
}


const s = 'xxdrissuqevu'
const startIndex = [0]
const endIndex = [10]
const subs = [3]

console.log(palindromeChecker(s, startIndex, endIndex, subs))
