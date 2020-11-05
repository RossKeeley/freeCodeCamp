function palindrome(str) {

  let cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let reverseStr = cleanStr.split("").reverse().join("").toLowerCase();
  if (cleanStr === reverseStr) {
    return true;
  } else { 
    return false;
  }
}

let result = palindrome("My age is 0, 0 si ega ym.");
console.log(result)