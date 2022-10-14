function canNest(arr1, arr2){
     let minArr1 = arr1[0];
     let minArr2 = arr2[0];
     let maxArr1 = arr1[0];
     let maxArr2 = arr2[0];
     for(let i=1; i<arr1.length; i++){
          if(arr1[i] < minArr1){
               minArr1 = arr1[i]
          } if(arr1[i] > maxArr1){
               maxArr1 = arr1[i]
          }
     }
     for(let i=1; i<arr2.length; i++){
          if(arr2[i] < minArr2){
               minArr2 = arr2[i]
          } if(arr2[i] > maxArr2){
               maxArr2 = arr2[i]
          }
     }
     let firstCondition = minArr1 > minArr2;
     let secondCondition = maxArr1 < maxArr2;
     let canThoseTwoArraysNest = firstCondition && secondCondition;
     console.log(canThoseTwoArraysNest)
}
canNest([1, 2, 3, 4], [0, 6])
canNest([3, 1], [4, 0]) 
canNest([9, 9, 8], [8, 9])
canNest([1, 2, 3, 4], [2, 3])