// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Examples:

function getGrade(score1, score2, score3) {
  var average = (score1 + score2 + score3) / 3;
  var grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80){
    grade = 'B';
  } else if (average >= 70){
    grade = 'C';
  } else if (average >= 60){
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"