// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

function randomAge(min, max) {
  min = Number.isInteger(min) ? min : 0;
  max = Number.isInteger(max) ? max : 0;
  min = Math.min(min, max);
  max = Math.max(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + 20
}

console.log(`Teddy is ${randomAge(20, 200)} years old!`)
console.log(`Teddy is ${randomAge(20, 200)} years old!`)
console.log(`Teddy is ${randomAge(20, 200)} years old!`)
console.log(`Teddy is ${randomAge(20, 200)} years old!`)