function findMissingValues(arr = []){
     if(!Array.isArray(arr))return "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]"
     let a = arr[1] - arr[0]
     let result = 0;
     for(let i=2; i<arr.length; i++){
          let b = arr[i] - arr[i-1];
          if(b<a)result = arr[1] - (a/2)
          else if(b>a)result = arr[i] - (b/2)
     }
     return result
}

console.log(findMissingValues([10,20,30,40,60,70,80]))
console.log(findMissingValues([2,3,8,10,12,14,16]))
console.log(findMissingValues([5,10,15,20,30,35,40,45,50]))
console.log(findMissingValues([0,0.5,1,2,2.5,3]))
console.log(findMissingValues([0,4,6,8,10,12]))