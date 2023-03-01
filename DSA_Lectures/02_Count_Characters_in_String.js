// Write a function that takes in a string and returns the count of each character in the string
// Output should be charCount(abbabsbaaasbb); //{a:4, b:5}

// Create an object to return at end
// Loop over the string for each char
//  if char is a number/letter AND key in the object then add one to count
//  if char is a number/ letter AND not key in the object then add to object and set value to one
//  if char is  not number/ letter than don't do anything
// return the object

// Create an object to return at end

function charCount (str) {
let result = {};
  // Loop over the string for each char
  for (let i = 0; i < str.length; i++) {
    //  if char is a number/letter AND key in the object then add one to count
    let char = str[i];

    if (result[char] > 0) {
      result[char]++;
      //  if char is a number/ letter AND not key in the object then add to object and set value to one
    } else {
      result[char] = 1;
    }
  }
  //  if char is  not number/ letter than don't do anything
  // return the object
  console.log(result);
  return result;
}

// !================== REFACTORING================================
function refactorCharCount(str){
 let obj={};
 for (let char of str){
  char = char.toLowerCase();
  if (/[a-z0-9]/.test(char)){
    if (obj[char]>0){
      obj[char]++
    } else {
    obj[char]=1
  };
  }
 }
 return obj;
}