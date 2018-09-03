function rot13(str) {
  let alp1 = "ABCDEFGHIJKLM";
  let alp2 = "NOPQRSTUVWXYZ";
  let arr1 = alp1.split("");
  let arr2 = alp2.split("");
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(arr1.indexOf(str[i]) != -1){
      let n = arr1.indexOf(str[i]);
      newStr += arr2[n];
    } else if(arr2.indexOf(str[i]) != -1){
      let p = arr2.indexOf(str[i]);
      newStr += arr1[p];
    } else{
      newStr += str[i];
    }
  }
  return newStr;
}
