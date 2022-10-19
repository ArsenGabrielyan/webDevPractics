// Secondary Functions
function removeDuplicates(arr){
     !Array.isArray(arr) ? "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]" : ""
     let newArr = [];
     arr.forEach(el => !newArr.includes(el) ? newArr.push(el) : "")
     return newArr
}
function iterateArrays(a){
     for(let i=0; i<=a.length; i++){
          return removeDuplicates(a.split("")).length
     }
}

// Main Function
function happyYear(year){
     const nextYear = year+1;
     const isHappyYear = iterateArrays(`${nextYear}`) === `${year}`.length;
     if(!isHappyYear){
          return happyYear(nextYear);
     }
     console.log(nextYear);
}
happyYear(2017)
happyYear(1990)
happyYear(2021)