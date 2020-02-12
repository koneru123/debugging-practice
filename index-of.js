/*
  Write a function, indexOf, that takes an array and a target value
  and returns the last index where that target value is found. If
  the value is not present in the array, then return -1.
*/

var indexOf = function(arr, val) {
  //we dont need an empty array variable here, we are complicating it
  //let found = [];
  //we can create an index variable and assign it to 0
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      //we can remove this push method, this is not needed
      //found.push(i);
      //then we can assign the index to i once found
      index = i;
    } else {
      //if not found we can assign it to -1
      index = -1;
    }
  }
  //then we can return this index
  return index;
};

const arr = [1, 2, 3];
const val = 4;
console.log(indexOf(arr, val));
