//!Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.


function sameFrequency(num1,num2){
    let arr=[num1,num2]
    let firstInt=arr[0];
    let firstIntNum = firstInt.toString().split('').map(Number);

    let secondInt=arr[1];
    let secondIntNum = secondInt.toString().split('').map(Number);
    if (!(firstIntNum.length===secondIntNum.length)){
        return false;
    }
    
    let frequencyCounter1={};
    let frequencyCounter2={};
    
    for (let digit of firstIntNum){
        frequencyCounter1[digit]=(frequencyCounter1[digit]||0)+1;
        
    }  
    for (let digit of secondIntNum){
        frequencyCounter2[digit]=(frequencyCounter2[digit]||0)+1;
        
    }  
    
    for (let key in frequencyCounter1 ){
        if (!(  key in frequencyCounter2)){
            return false;             
        } else {
          if(frequencyCounter1[key]===frequencyCounter2[key]){
            return true;
          }
        }
    }
}
