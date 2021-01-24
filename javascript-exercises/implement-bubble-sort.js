function selectionSort(array) {
  var result = [];
  do {
    result.push(Math.min(...array));
    array.splice(array.indexOf(Math.min(...array)), 1)
  } while (array.length > 0);
  return result;
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
