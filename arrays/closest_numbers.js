function closestNumbers(numbers) {
  numbers = numbers.sort((a, b) =>  a - b)
  if (numbers.length === 2) console.log(numbers[0], numbers[1])

  let minDiff = Infinity;
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    let currentNumber = numbers[i];
    let nextNumber = numbers[i + 1];

    let currentDiff = nextNumber - currentNumber;
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      result = [currentNumber, nextNumber];
    } else if (currentDiff === minDiff) {
      result = [...result, currentNumber, nextNumber]
    }
  }

  console.log(...result)
}

const arr = [1, 4, 6, 8]
closestNumbers(arr)