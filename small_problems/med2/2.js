// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
/*
Input: three sides of a triangle, Numbers
Output: String, type of triangle

- create array sides from args
- sort sides on b - a
- check if invalid, return 'invalid'
  - sides.some side === 0 || sides.length !== 3 || sides[0] + sides[1] <= sides[2]
- reduce sides to unique length
  - if !uniqSides.includes(side) uniqSides.push(side)
- if uniqSides.length = 1 return equilateral
- if uniqSides.length = 2 return isos
- if uniqSides.length = 3 return scalene

*/

function invalid(sides) {
  return  sides.length !== 3 ||
          sides[0] <= 0 ||
           sides[0] + sides[1] <= sides[2];
}

function triangle() {
  let sides = Array.from(arguments).sort((a,b) => a - b);
  console.log(sides);
  if (invalid(sides)) return "invalid";

  uniqSides = sides.reduce(function(uniqSides, side) {
    if(!uniqSides.includes(side)) {
      uniqSides.push(side);
    }
    return uniqSides;
  }, []);

  if(uniqSides.length === 1) {
    return 'equilateral';
  } else if (uniqSides.length === 2) {
    return 'isoceles';
  } else {
    return 'scalene';
  }
}


// Examples:


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"