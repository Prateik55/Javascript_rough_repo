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
