function removeDuplicates(arr){
     if(!Array.isArray(arr)){
          return "This is Not an Array, Try typing an Array like This: [1,2,3,4,5,6,7,8,9]"
     }
     let newArr = [];
     arr.forEach(el =>{
          if(!newArr.includes(el)){
               newArr.push(el)
          }
     })
     console.log(newArr)
}
removeDuplicates([1, 2, 4, 3, 6, 1, 3, 7, 8, 33, 23])