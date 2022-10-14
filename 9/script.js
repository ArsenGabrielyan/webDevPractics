function merge(...arr){
     let arr1 = []
     arr.forEach(el => arr1.push(...el))
     console.log(arr1)
}
merge([1, 2, 3], [4, 5], [6, 7])
merge([1], [2], [3], [4], [5], [6], [7])
merge([1, 2], [3, 4])
merge([4, 4, 4, 4, 4])