//! Write a function called sumZero, which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exists.

// explanation https://www.notion.so/pratix/DSA-12138c63a2c34ede8b523ccb82849b96?pvs=4#615218c7202646ae8c02642913bd02cf

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