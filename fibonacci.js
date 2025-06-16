const fibonacci = (x) => {
    if (x === 0) return (0)
    if (x === 1) return (1)
    return fibonacci(x - 1) + fibonacci(x - 2)
}
console.log(fibonacci(5))

const fibo2 = (n) => {
    const arr = [0, 1]

    for (let i = 2; i <= n ; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]

}
console.log(fibo2(5))