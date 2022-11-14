function charBox(n){
     if(n===0) return [[]];
     if(typeof n !== "number" || !Number.isInteger(n) || n < 0) return -1;
     const result = [...Array(n).keys()].map(i => [...Array(n).keys()].map(j => 
          i===0||i===n-1||j===0||j===n-1?"#":""     
     ));
     console.log(result)
}
charBox(1)
charBox(2)
charBox(4)