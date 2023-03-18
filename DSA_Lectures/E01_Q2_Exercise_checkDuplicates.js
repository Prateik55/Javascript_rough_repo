//! Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.


// Using frequencyCounter

const areThereDuplicates = function (){
    let frequencyCounter={};

    for (let i of arguments){
        frequencyCounter[i]=(frequencyCounter[i]||0)+1;
    }
        for (let key in frequencyCounter){
            if (frequencyCounter[key] > 1){
             return true;
            }
}
return false;
} 

// Using multiple pointers
// sorting the array -- may require the conversion of object to array 
// initialising the left and right variables 
// iterating through the whole array to cheeck if the value of left is equal to the value of thee rght 


function areThereDuplicatesMP(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
