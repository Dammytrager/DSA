function factorial(n) {
    // if (n  === 0 || n === 1) return 1;
    // return n * factorial(n - 1)
    let result = 1;
    for (let i = n; i > 0; i--) {
        result = result * i
    }
    console.log(result.toLocaleString('en-us', { useGrouping: false }))
}

factorial(25)