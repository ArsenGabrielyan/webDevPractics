function getFrequencies(arr = []){
     !Array.isArray(arr) ? "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]" : ""
     const count = {}
     arr.forEach(val => count[val] ? count[val]++ : count[val] = 1)
     console.log(count)
}

console.log(getFrequencies([true, false, true, false, false]))