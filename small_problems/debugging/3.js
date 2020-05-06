// One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  var elements = array.slice();
  var randomElements = [];

  while (n > 0 && elements.length > 0) {
    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

var ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

var spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

var extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

var adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
var firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
var secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!
// var dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// var dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);
// The bug is introduced on these lines. Unfortunately, the + operator does not concatenate arrays directly; instead it coerces them to strings and concats the strings. To get the result we want, we should use the concat() method.

var dishName = random(adjective).concat(random(firstNoun).concat(random(secondNoun)));
var dish = random(ingredients, 3).concat(random(spices, 2).concat(random(extras, 1)));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));