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
  //we can user terinary operator to handle this logic
  const hoursText = hours > 1 ? 'hours' : 'hour';
  const minutesText = mins > 1 ? 'minutes' : 'minute';
  //we can use string literals to easily display the message in this format
  result = `${hours} ${hoursText} ${mins} ${minutesText}`
  // The way we are handling this logic is confusing and we need to handle hour vs hours & minute vs minutes based on the number. In this case we can use terinary operator.
  /*if (hours > 1) {
    result += hours + ' hours';
  } else if (hours === 1) {
    result += '1 hour';
  } else if (mins > 1) {
    result += mins + ' minutes';
  } else if (mins === 1) {
    result += '1 minute';
  }*/
  return result;
};

const min1 = 210;
console.log(minuteConversion(min1)); // returns 3 hours 30 minutes
