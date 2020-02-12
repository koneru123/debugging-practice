/*
  Write a function, findObject, that takes an array of objects, a key,
  and a value, and returns the first object with a key/value pair that
  matches the provided key and value. If no object matches, return null.

  var dogs = [
    { name: 'Scout', breed: 'Husky' },
    { name: 'Lucky', breed: 'Beagle' },
    { name: 'Shadow', breed: 'Husky' },
    { name: 'Molly', breed: 'Collie' }
  ];
  findObject(dogs, 'breed', 'Husky')
  should return { name: 'Scout', breed: 'Husky' }
*/

var findObject = function(list, key, value) {
  for (var i = 0; i < list.length; i++) {
    // here we need to also loop through individual object inside the array
    // list[i].key is undefined in this case and since we are comparing undefined to a value this condition is not going to be evaluated.
    // Then we need to change the condition to list[i].breed to make sure it evaluates
    for(let key in list[i]) {
      if (list[i].breed === value) {
        return list[i];
      }
    }
  }
  return null;
};

//assert function
function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if(actual === expected) {
    console.log('passed');
  } else {
    console.log(`failed ${testName}, expected ${expected}, but got ${actual}`);
  }
}

//test cases
//Passed Scenario
var dogs1 = [
  { name: 'Scout', breed: 'Husky' },
  { name: 'Lucky', breed: 'Beagle' },
  { name: 'Shadow', breed: 'Husky' },
  { name: 'Molly', breed: 'Collie' }
];
const key1 = 'breed';
const value1 = 'Husky';
const result1 = findObject(dogs1, key1, value1);
const expected1 =  { name: 'Scout', breed: 'Husky' };
assertEqual(result1, expected1, 'This should return the object');

//Failed Scenario
var dogs2 = [
  { name: 'Scout', breed: 'Husky' },
  { name: 'Lucky', breed: 'Beagle' },
  { name: 'Shadow', breed: 'Husky' },
  { name: 'Molly', breed: 'Collie' }
];
const key2 = 'breed';
const value2 = 'Husky';
const result2 = findObject(dogs1, key1, value1);
const expected2 =  { breed: 'Husky' };
assertEqual(result2, expected2, 'This should not return the expected object');

//console.log(findObject(dogs, 'breed', 'Husky')); //should return { name: 'Scout', breed: 'Husky' }





