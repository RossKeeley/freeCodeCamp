function permAlone(str) {
  
  function findPerms(str) {
    if (str.length === 0) return "";
    if (str.length === 1) return str;
    
    let resultTemp = [];

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      
      for (let j = 0; j < remainingChars.length; j++) {
        resultTemp.push(currentChar + findPerms(remainingChars)[j]);
      };
    };
    return resultTemp;
  };
  var result = findPerms(str);
  console.log(result)
  result.forEach((perm) => {
    for (let j = 0; j < perm.length; j++) {
      // console.log(perm[j], perm[j - 1])
      // console.log(result.indexOf(perm), perm)
      if (perm[j] === perm[j - 1]) {
        console.log(result.indexOf(perm), perm)
        result.splice(result.indexOf(perm), 1);
      };
    };
    return result;
  });
  return result;
};

console.log(permAlone('aab'));
