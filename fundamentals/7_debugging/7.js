// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  var thisSpecies = species[i];
  let newSpecies; // added to ensure newSpecies is falsey on each iteration;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) { // the duplication occurs because this line relies on newSpecies being falsy on each iteration if the speciies is not transformable. however, because newSpecies remains in scope throughout the loop, it is always truthy after its first assignment.
    console.log('Beware of the ' + newSpecies + '!');
  }
}