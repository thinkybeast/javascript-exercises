// We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

// Examples:

// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var MIDNIGHT = new Date(2019, 1, 1, 0 ,0);

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

 timeOfDay = function(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

timeOfDay = function(deltaMinutes) {
  var hours;
  var minutes;
  var time = new Date(MIDNIGHT);
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  time.setMinutes(deltaMinutes);

  hours = time.getHours();
  minutes = time.getMinutes();
  console.log(String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0'));
}


timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"