// Build a program that asks a user for the length and width of a room in meters, and then logs to the console the area of the room in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

let getValue = function() {
  let value = ''
  while(true) {
    value = prompt('Enter the type of value (feet/meters.)');
    if (value === 'feet' || value === 'meters') break;
    alert('Invalid value type.');
  }
  return value;
}

let area = () => {
  const METERS_TO_FEET = 10.7639;
  let value = getValue();
  let length = parseFloat(prompt(`Enter the length of the room in ${value}`), 10);
  let width = parseFloat(prompt(`Enter the width of the room in ${value}`), 10);
  area = length * width;
  if (value === 'meters') {
    areaConversion = area * METERS_TO_FEET;
    altValue = 'feet';
  } else {
    areaConversion = area / METERS_TO_FEET;
    altValue = 'meters';
  }

  console.log(`The area of the room is ${area.toFixed(2)} square ${value} ( ${areaConversion.toFixed(2)} square ${altValue}).`);
};

area();