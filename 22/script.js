function compactObj(val){
     const data = Array.isArray( val ) ? val.filter( Boolean ) : val;
     return Object.keys(data).reduce((a,k)=>{
          const val = data[k];
          if(Boolean(val)) a[k] = typeof val === "object" ? compactObj(val) : val;
          return a;
     },Array.isArray( val ) ? [] : {})
}
const obj = {
     a:null,
     b:false,
     c:true,
     d:0,
     e:1,
     f:'',
     g:'a',
     h:[null,false,"",true,1,"a"],
     i:{j:0,k:false,l:"a"}
};
console.log(compactObj(obj))