function numInStrWithoutRegExp(arr){
     let result = arr.filter(el => {
          let valid = false
          el.split("").forEach(char =>{if(Number.isInteger(parseInt(char))) valid = true;})
          if(valid) return el;
     })
     console.log(result)
}
numInStrWithoutRegExp(["1a", "a", "2b", "b"])
numInStrWithoutRegExp(["abc", "abc10"])
numInStrWithoutRegExp(["abc", "ab10c", "a10bc", "bcd"]) 
numInStrWithoutRegExp(["this is a test", "test1"]) 