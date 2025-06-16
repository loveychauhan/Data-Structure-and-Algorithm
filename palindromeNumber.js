

const isPalindromeNumber = (num) => {
    if (num < 0) return false

    const orgNum = num
    let rev = 0
    while (num > 0) {
        const rem = num % 10
        rev = rev * 10 + rem
        num = Math.floor(num / 10)
    }
    if (orgNum === rev) return true
    else return false
}

console.log(isPalindromeNumber(8))