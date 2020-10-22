function dropElements(arr, func) {
  var times = arr.length
  for (let i = 0; i < times; i++) {
    console.log(i, arr[i], arr, func(arr[i]))
    if (func(arr[0])) {
      break;
    } else {arr.shift()};
  }
  return arr;
}

let result = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log(result);
