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
    if (list[i].key === value) {
      return list[i];
    }
  }
  return null;
};

var dogs = [
  { name: 'Scout', breed: 'Husky' },
  { name: 'Lucky', breed: 'Beagle' },
  { name: 'Shadow', breed: 'Husky' },
  { name: 'Molly', breed: 'Collie' }
];
//This would always evaluate to null
//console.log(findObject(dogs, 'breed', 'Husky')); //should return { name: 'Scout', breed: 'Husky' }



