function findDuplicates(arr = []){
     if(!Array.isArray(arr)){
         return "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]"
     }
     let result = [...new Set(arr.filter(el=> arr.indexOf(el) !== arr.lastIndexOf(el)))].sort((a,b)=> a-b)
     let condition = result.length ? result : null;
     console.log(condition)
}
findDuplicates([1, 2, 3, 4, 3, 5, 6]) 
findDuplicates([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) 
findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 