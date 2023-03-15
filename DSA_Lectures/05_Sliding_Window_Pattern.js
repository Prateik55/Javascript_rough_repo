// !Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//  First solution by using reinterating again and again -- Not efficient 

function maxSubarraySum(arr,num){
    if ( num > arr.length){
        return null;
    }
    //  we are considering that the array may include negative values 
    var max= -Infinity;
        //  i variable will increase upto the value where the remaining digits in array are equal to num given so that it can make set which is to be added 
    for (let i=0; i<arr.length-num+1; i++){
        // temp variable is storing the value of the sum of i and j variable 
        temp=0;
        // j variable constantly increase and adds to the value of i till j< num
        for (let j =0; j<num; j++){
            temp+= arr[i+j];
        }
        // check if the temp is greater than max value which defaults to -Infinity. If it is greater than replace max value 
        if (temp > max) {
            max=temp;
        }
    }
     return max
}

// Sliding window approach 
 
function maxSubarraySumSW(arr,num){
let maxSum = 0;
let tempSum = 0;
if( arr.length < num) return null;
for (let i=0; i<num; i++){
 maxSum+=arr[i];
}
tempSum = maxSum;
for (let i= num; i<arr.length;i++){
    tempSum= tempSum-arr[i-num]+arr[i]
    maxSum=Math.max(maxSum,tempSum)
}
 return maxSum;
}