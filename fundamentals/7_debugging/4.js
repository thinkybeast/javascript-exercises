// We love to visit museums if they are about science or computers. We're undecided when it comes to modern art, but we consider going if there is a museum about Andy Warhol (because we do like him) or if it's a modern art museum conveniently located in nearby Amsterdam. All other museums we'd rather skip.

// We tried to implement these preferences in a function, so we can automatically sort through long lists of museums and find the ones that sound interesting. However, our Boolean check is flawed, as it fails some of our test cases. Can you fix it?

function wantToVisit(museum, city) {
  return (museum.includes('Computer') || museum.includes('Science')) ||
       ((museum.includes('Modern') && museum.includes('Art') &&
       (museum.includes('Andy Warhol') || city === 'Amsterdam')));
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true); //
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true); //
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true); //
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);