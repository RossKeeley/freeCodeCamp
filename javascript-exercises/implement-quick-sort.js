function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotPoint = array[0];
    let lessThan = [];
    let equalTo = [];
    let greaterThan = [];
    for (let num of array) {
      if (num < pivotPoint) {
        lessThan.push(num);
      } else if (num > pivotPoint) {
        greaterThan.push(num);
      } else {
        equalTo.push(num);
      }
    }
  return [...quickSort(lessThan), ...equalTo, ...quickSort(greaterThan)];
  }
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
