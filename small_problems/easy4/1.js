// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

const DEGREES_SYM = '˚';
const MINUTES_SYM = "'";
const SECONDS_SYM = '"';

function dms(angle) {
  while (angle < 0) {
    angle += 360;
  }
  while (angle > 360) {
    angle -= 360;
  }

  var degrees = Math.floor(angle);
  var minutes = Math.floor((angle - degrees) * 60);
  var seconds = Math.round((((angle - degrees) * 60) - minutes) * 60);
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  return degrees + DEGREES_SYM + minutes + MINUTES_SYM + seconds + SECONDS_SYM;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 0°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
console.log(dms(-76.73));
console.log(dms(-254.6));
console.log(dms(-93.034773));