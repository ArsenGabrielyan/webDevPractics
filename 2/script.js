function numInStr(arr) {
     console.log(arr.filter(el=>/\d+/.test(el)))
}
numInStr(["1a", "a", "2b", "b"])
numInStr(["abc", "abc10"])
numInStr(["abc", "ab10c", "a10bc", "bcd"]) 
numInStr(["this is a test", "test1"]) 