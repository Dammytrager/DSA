function findCompleteSuit(array) {
    const clubArray = array.filter(item => item.split('')[1] === 'C')
    const spadeArray = array.filter(item => item.split('')[1] === 'S')
    const diamondArray = array.filter(item => item.split('')[1] === 'D')
    const heartArray = array.filter(item => item.split('')[1] === 'H')

    const completeCLub = noOfCompleteSuits(clubArray);
    const completeSpade = noOfCompleteSuits(spadeArray);
    const completeDiamond = noOfCompleteSuits(diamondArray);
    const completeHeart = noOfCompleteSuits(heartArray);

    return Math.min(completeCLub, completeDiamond, completeSpade, completeHeart)
}

function noOfCompleteSuits(array) {
    const cards = array.map(item => item.split('')[0]);
    const obj = {'2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'T': 0, 'J': 0, 'Q': 0, 'K': 0, 'A': 0};
    cards.forEach(item => {
        obj[item] = obj[item] + 1
    });

    const values = Object.values(obj);
    return Math.min(...values)
}

const cards =["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S",
    "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH",
    "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D",
    "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C",
    "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS",
    "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H",
    "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D",
    "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC",
    "KD", "KH", "AS", "AC", "AD"]
console.log(findCompleteSuit(cards))
