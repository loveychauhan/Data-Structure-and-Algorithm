const anagram = (s, t) => {
    if (s.length !== t.length) return false
    return s.split('').sort().join('') === t.split('').sort().join('')
}

// console.log(anagram('anagamr', 'nagaram'))

function anagram2(s, t) {
    if (s.length !== t.length) return false

    obj1 = {}
    obj2 = {}

    for (let i = 0; i <= s.length; i++) {

        obj1[s[i]] = (obj1[s[i]] || 0) + 1
    }

    console.log(obj1)
} 
console.log(anagram2('anagamr', 'nagaram'))