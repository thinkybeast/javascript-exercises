// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

/*
Input: Total number of switches n
Output: Array, containing the numbers of lights (starting at 1, not 0) that are 'on' after n repetitions

Problem:
- Create a bank of switches with 'n' lights in the off position
- for n rounds
  - flip switch of light where lightNum % roundNum === 0
    - if switch is 'off', turn 'on'
    - if switch is 'on', then turn 'off'
- after n rounds, return the positions of lights set to 'on'


Clarifying Questions:
  - how to deal with 0 or negative number
    - return empty array

Data Structure:
- array of n elements, with an initial value of 0 at all indexes

Algorithm:
  - initialize n + 1 element array switchBank with an initial value of 0 at all indexes
  - for n rounds
    - map the elements of switch bank
      - if idx && idx % round === 0, return (el) ? 0 : idx
  - filter return el
*/

//Code:


//Test Cases:


function lightsOn(switches) {
  let switchBank = new Array(switches + 1).fill(0);
  let round;
  // console.log(switchBank);
  for(round = 1; round <= switches; round += 1) {
    switchBank = switchBank.map(function(el, idx) {
      if (idx && idx % round === 0) {
        return (el === 0) ? idx : 0;
      } else {
        return el;
      }
    });
  }

    console.log(switchBank.filter(el => !!el));
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]