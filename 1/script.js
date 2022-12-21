function countTrue(arr){
     let count = 0
     arr.forEach(element => {if(element == true)count++});
     console.log(count)
}
countTrue([true, false, false, true, false])
countTrue([false, false, false, false])
countTrue([]) 