/*
  Write a function, minuteConversion, that accepts a whole number of
  minutes and returns a string with a human readable string of hours
  and minutes.

  If the number of minutes is more than 60, the minutes should be
  converted to hours. For both hours and minutes, the correct
  plural/singular form should be used, and if the value of hours
  or minutes is zero, the word should be omitted entirely.

  minuteConversion(210) // should return '3 hours 30 minutes'
*/

var minuteConversion = function(min) {
  let mins = min % 60;
  let hours = (min - mins) / 60;
  let result = '';
  if (hours > 1) { 
    result += hours + ' hours';
  } else if (hours === 1) { 
    result += '1 hour';
  } else if (mins > 1) { 
    result += mins + ' minutes';
  } else if (mins === 1) { 
    result += '1 minute';
  }
  return result;
};
