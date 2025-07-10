function twoSum(arr, target) {

    // brute force 
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > target) continue
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === target) return [i, j]
    //     }
    // }
    // return [arr.indexOf(target)]


    //js Object 
    const obj = {}

    for (let i = 0; i < arr.length; i++) {

        let n = arr[i]

        if (obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else {
            obj[n] = i
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 26))