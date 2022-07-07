let user = [{
     name: "q",
     children: [
          {
               name: "r",
               children: [
                    {
                         name: "d",
                         children: [
                              {
                                   name: "g",
                                   children: []
                              }
                         ]
                    },
                    {
                         name: "b",
                         children: [
                              {
                                   name: "u",
                                   children: []
                              },{
                                   name: "l",
                                   children: []
                              }
                         ]
                    },
                    {
                         name: "t",
                         children: []
                    }
               ]
          },
          {
               name: "p",
               children: []
          }
     ]
}]

user.filter(item=>{
     func(item)
})
function func(a){
   for(let x in a){
     if(typeof(a[x])=="object"){
          func(a[x])
     }else if (x=="name"){
          console.log(`${x}: ${a[x]}`)
     }
   }  
}