

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
//  ======================refactored code==================

function sumZeroMP(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  
    return undefined;
  }