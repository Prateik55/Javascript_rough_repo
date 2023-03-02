// ! A function called "same" which accepts to arrays and the function should return true if every value in the array has its corresponding values squared in the second array.So in the first array there's a bunch of values and we want to know if the second array has the exact same values but squared. But the order doesn't matter. So it doesn't have to be identical, just squared.It can be mixed up, but the frequency of values must be the same. For Example Same({1,2,3} {1,4,9}) \\\True

arr1=[1,2,3];
arr2=[1,4,9];


function same(arr1, arr2){
 if (arr1.length!==arr2.length){
    return false
 }

 let frequencyCounter1={};
 let frequencyCounter2={};

 for (let i of arr1){
    frequencyCounter1[i]=(frequencyCounter1[i]||0)+1
 }
 for (let i of arr2){
    frequencyCounter2[i]=(frequencyCounter2[i]||0)+1
 }

 for (let key in frequencyCounter1){
    if (!(key**2 in frequencyCounter2)){
        return false
    }
    if (frequencyCounter2[key** 2] !== frequencyCounter1[key]){
        return false;
    }
 }
return true
}
same(arr1,arr2);