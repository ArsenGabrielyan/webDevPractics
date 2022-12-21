function difference(arr1, arr2){
     if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
     let a1 = flatten(arr1,true), a2 = flatten(arr2,true), a=[],diff=[];
     for(let i=0;i<a1.length;i++) a[a1[i]]=false;
     for(let i=0;i<a2.length;i++){
          if(a[a2[i]]===true)delete a[a2[i]]
          else a[a2[i]]=true;
     }
     for(let k in a) diff.push(k);
     return diff;
}
function flatten(a,s,r){
     if(!r) r=[];
     if(s) return r.concat.apply(r,a);
     for(let i=0;i<a.length;i++){
          if(a[i].constructor == Array) flatten(a[i],s,r)
          else r.push(a[i]);
     }
     return r
}
console.log(difference([1,2,3],[100,2,1,10]));
console.log(difference([1,2,3,4,5],[1,[2],[3,[[4]]],[5,6]]));