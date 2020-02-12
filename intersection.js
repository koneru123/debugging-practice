/*
  Write a function, intersection, that takes two arrays and returns
  the elements that are in both arrays.

  var a = [4, 1, 2, 3];
  var b = [3, 7, 5, 1, 9, 8];

  intersection(a, b)
  should return [1, 3]
*/

var intersection = function(arrA, arrB) {
  var newArr = [];
  for (var i = 0; i < arrA.length; i++) {
    //we dont need this inner for statement, this kind of creates a loop and repeats the number of times 1 and 3 are displayed
    //for (var j = 0; j < arrB.length; j++) {
      //we can also check if the value exists in an array using indexOf method
      if (arrB.indexOf(arrA[i]) > -1) {
        newArr.push(arrA[i]);
      }
    //}
  }
  return newArr;
};

var arr1 = [4, 1, 2, 3];
var arr2 = [3, 7, 5, 1, 9, 8];
console.log(intersection(arr1, arr2)); //return [1, 3]
