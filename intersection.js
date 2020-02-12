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
    for (var j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        newArr.push(i);
      }
    }
  }
  return newArr;
};
