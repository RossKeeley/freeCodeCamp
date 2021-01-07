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
  for (let i = 0; i < 4; i++) {

console.log(result, result.length, i, "first loop");

    for (let j = 0; j < result[i].length; j++) {

console.log(result[i], result[i].length, j, result[i][j], result[i][j - 1], "second loop");

      if (result[i][j] == result[i][j + 1]) {

console.log(result[i], result[i].length, j, result[i][j], "if statement");

console.log(result, result.length, i, j, "before splice");

        result.splice(i, 1);
        j = -1;
console.log(result, result.length, i, j, "after splice");
      };
    };

  };
  return result;

}

console.log(permAlone('aab'));
