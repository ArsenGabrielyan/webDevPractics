function countNumberOfOccurencies(badWordsObj){
     const values = Object.values(badWordsObj);
     const obj = {};
     values.forEach(val => obj[val] ? obj[val]++ : obj[val] = 1)
     return obj
}
console.log(countNumberOfOccurencies({
     a: "moron",
     b: "scumbag",
     c: "moron",
     d: "idiot",
     e: "idiot"
}))
console.log(countNumberOfOccurencies({
     a: "moron",
     b: "moron",
     c: "moron"
}))
console.log(countNumberOfOccurencies({
     a: "idiot",
     b: "scumbag"
}))