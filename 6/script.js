function minMax(arr = []){
     if(!Array.isArray(arr)){
          return "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]"
     }
     let arr2 = [];
     let minArr = arr[0];
     let maxArr = arr[0];
     for(let i=1; i<arr.length; i++){
          if(arr[i] < minArr){
               minArr = arr[i]
          }
          if(arr[i] > maxArr){
               maxArr = arr[i]
          }
     }
     arr2.push(minArr, maxArr)
     return arr2
}
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))