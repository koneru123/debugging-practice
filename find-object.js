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
    if (list[i].key === value) {
      return list[i];
    }
  }
  return null;
};
