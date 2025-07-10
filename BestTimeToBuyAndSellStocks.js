function maxProfit(price) {

    //Brute Force

    // const max = []

    // for (let i = 0; i < price.length; i++) {

    //     for (let j = i + 1; j < price.length; j++) {
    //         if (price[j] - price[i] > 0) {
    //             max.push(price[j] - price[i])
    //         }
    //     }
    // }

    // max.sort((a, b) => a - b)
    // return Array.isArray(max) ? max[max.length - 1] : 0


    //greedy Approach


    let minStockPrice = price[0]
    let profit = 0

    for (let i = 1; i < price.length; i++) {

        if (minStockPrice > price[i]) {
            minStockPrice = price[i]
        }

        let currentProfit = price[i] - minStockPrice

        if (currentProfit > profit) {
            profit = currentProfit
        }

    }

    return profit



}
console.log(maxProfit([1, 2, 4, 7, 11]))


// [7, 1, 5, 3, 6, 4]
// minStockPrice = 7  => 1
//max profit = 0 => 5 - 1 => 4 = 6 - 1 => 5 