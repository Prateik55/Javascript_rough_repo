
// ! Count unique values in the array 


// function countUniqueValues(arr){
// arr.sort((a,b)=>a-b);
// let left=0;
// let  right = arr.length-1;
// let arr2=[];

// while (left < right){ 
//  if (arr[left]===arr[right]){
//   right--;
// }else if( arr[left]!==arr[right]) {
//  left ++;
// } else {
//  arr2.push(arr[left]);
//  console.log(arr2)
//  }
// }
// }

// As it is not explicitely told that we cannot manipulate the given array

function countUniqueValues(arr) {
    if (arr.length===0) return 0;
    let i =0;
    let j =1;
   while(j<=(arr.length-1)){
    if (arr[i]!==arr[j]){
        i++;
        arr[i]=arr[j]
    }
    j++;
   }
    return i+1;
  }

//   ==================SOLUTION BY FREQUENCY COUNTER============

function countUniqueFreq(arr){
    let result = {};
    for(var element of arr){
        result[element] = (result[element] + 1) || 1;
    }
    return Object.keys(result).length;
}