let arr2=[];
function sumZero(arr){
    arr.sort((a,b)=>a-b);
    
    for (let i of arr){
      for (let j of arr){         
            if ((i+j)===0){
              arr2.push(i,j);
              return arr2;
              } 
     }
   
    }
}
console.log(arr2);
