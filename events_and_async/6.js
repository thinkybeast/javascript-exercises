// Given the HTML below, write some JavaScript code that updates the options on one dropdown when the selection in the other dropdown changes. For instance, when the user chooses an option under Classifications, the items in the Animals dropdown should change accordingly. Use the lookup tables below to see which animals and classifications go together.

/*
Create classifications object that maps animals to an array of classifications (strings)
Get select els for classifications and animals
Attach change listeners to both selects
  - In select#animals element
    - for each classification in classifications.select
      - if classifications[target.value] doesn't include classification, hide
  - In select#classifications element
    -  for each animal in animals select
      - if classifications[animal] doesnt include target.value, hide
Get clear button
  - on click, walk both select el's children and unhide
*/


var linkedOptions =
{
  animals: {
    Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    Mammal: ['Bear', 'Whale'],
    Bird: ['Ostrich'],
  },

  classifications: {
    Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Vertebrate', 'Cold-blooded'],
    Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon: ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
  },

}




document.addEventListener('DOMContentLoaded', function(){
  function setOptions(selectNode, list) {
    selectNode.options.length = 0;
    list.forEach(function(option, idx) {
      selectNode.options[idx] = new Option(option);
    })
  }
  var selectClassification = document.getElementById('animal-classifications');
  var selectAnimal = document.getElementById('animals');
  var clear = document.getElementById('clear');


  selectClassification.addEventListener('change', function(event) {
    var classification = event.target.value;
    setOptions(selectAnimal, linkedOptions.animals[classification])
  });

  selectAnimal.addEventListener('change', function(event) {
    var animal = event.target.value;
    setOptions(selectClassification, linkedOptions.classifications[animal]);
  });

  clear.addEventListener('click', function(event) {
    event.preventDefault();
    setOptions(selectAnimal, ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);
    setOptions(selectClassification, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
  })
});

