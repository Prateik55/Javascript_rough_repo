// !Given two strings write a function to determine if they are anagrams of each other(words formed by rearranging the letter of other ) 
// assuming only single words 

// check the length of both the strings 
// make 2 frequency counter objects 
// count the occurances and add it to the objects
// compare key by key

// link for explanation https://pratix.notion.site/DSA-12138c63a2c34ede8b523ccb82849b96
str1= "aaz";
str2= "zza";
 
function isAnagram(str1,str2){
if (str1.length!==str2.length){
 return false
}
let frequencyCounter1={};
let frequencyCounter2={};

for (let i of str1){
    frequencyCounter1[i]=(frequencyCounter1[i]||0)+1;
}

for (let i of str2){
    frequencyCounter2[i]=(frequencyCounter2[i]||0)+1;
}

for (let key in frequencyCounter1 ){
    if (frequencyCounter2[key]!==frequencyCounter1[key]){
        return false;
    }
}
 return true;
}