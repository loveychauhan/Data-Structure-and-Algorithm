
//Array declaration
const arr = ['apple', 'banana', 'cherry']

//Add element to at the end
const res = arr.push('watermelon')
// console.log(res)

//Remove element at from the end
arr.pop()
// console.log(res)

//Add element at the top
arr.unshift('orange')
// console.log(arr)

//Remove element from top
arr.shift()
// console.log(arr)


//spred and rest operator

function params(...number) {

    return number
}



const num = [1, 2, 3]
const num2 = [4, 5]

// console.log(params(...num, ...num2, 'hello'))

// console.log([...num, ...num2])

//splice
const newarr = [...num, ...arr]
// console.log(newarr)
// newarr.splice(3, 2)
// console.log(newarr)


//splice
const slicearr = newarr.slice(0, 3)
console.log(newarr)
