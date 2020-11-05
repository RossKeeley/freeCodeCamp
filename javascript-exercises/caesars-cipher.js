function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipher = str.split("");
  let indexArray = [];
  let result = [];

  cipher.forEach(function(i) {
    if (i.match(/[A-Z]/i)) {
      indexArray.push((alphabet.indexOf(i))-13);
    } else {
      indexArray.push(i);
  }

  });
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] < 0 && typeof indexArray[i] == 'number') {
        indexArray[i] = alphabet.length + (indexArray[i]);
    }
    if (typeof indexArray[i] == 'number') {
      let a = alphabet[indexArray[i]]
      result.push(a)
    } else {
      result.push(indexArray[i])
    }
  }
  return result.join("");
}

let result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(result);
