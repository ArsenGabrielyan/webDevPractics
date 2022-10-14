function keysAndValues(obj){
     const keys = [];
     const values = [];
     for(let x in obj){
          keys.push(x);
          values.push(obj[x])
     }
     const arr = [keys,values]
     console.log(arr)
}
keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })