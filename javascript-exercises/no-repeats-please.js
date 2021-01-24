function permAlone(str) {
  var regex = /(.)\1+/;
  var arr = str.split("");
  var perms = [];
  var temp;
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  function swap(index1, index2) {
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  function generate(int) {
    if (int === 1) {
      perms.push(arr.join(""));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }
  generate(arr.length);
  var filtered = perms.filter(function(string) {
    return !string.match(regex);
  });
  return filtered.length;
}

console.log(permAlone("abcdefa"));
