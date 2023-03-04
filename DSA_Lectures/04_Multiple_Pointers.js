
function sumZero(arr){
    arr.sort((a,b)=>a-b);
    for (let i of arr){
      for (let j of arr){
            let arr2=[];  
            if ((i+j)===0){
              arr2.push(i,j);
              arr[j]--
              return arr2;
              }
      else{
        arr[j]--
      }
      console.log(arr2)
     }
    arr[i]++
    }
}
console.log(arr2);
