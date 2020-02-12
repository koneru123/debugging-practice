/*
  Write a function, indexOf, that takes an array and a target value
  and returns the last index where that target value is found. If
  the value is not present in the array, then return -1.
*/

var indexOf = function(arr, val) {
  let found = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      found.push(i);
    } else {
      return -1;
    }
  }
  return found[found.length - 1];
};
