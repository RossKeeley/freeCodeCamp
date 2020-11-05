function truthCheck(collection, pre) {
  let result = true;
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i][pre])
    if (
      collection[i][pre] === undefined ||
      collection[i][pre] === 0 ||
      collection[i][pre] === null ||
      collection[i][pre] === "" ||
      Number.isNaN(collection[i][pre])
      ) { 
        result = false; 
    };
  }
  return result;
}

let result = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

console.log(result);