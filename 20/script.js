function fillArr(start, end, step){
     let result = []
     if(step === 0 || typeof start ==  "undefined" || typeof end == "undefined" || typeof start != typeof end) return false;
     if(end<start) step = -step;
     if(typeof start == "number"){
          while(step>0?end>=start:end<=start){
               result.push(start)
               start+=step;
          }
     }
     else if (typeof start == "string") {
          if(start.length !=1 || end.length!=1) throw TypeError("Only One Character")
          start=start.charCodeAt(0);
          end=end.charCodeAt(0);
          while (step > 0 ? end >= start : end <= start) {
               result.push( String.fromCharCode(start))
               start += step;
          }
     } else throw TypeError("Only Strings and Numbers")
     return result
}
console.log(fillArr("a","z",2));
console.log(fillArr("Z","A",2));
console.log(fillArr(0,-5,1));
console.log(fillArr(0,25,5));
console.log(fillArr(20,5,5));