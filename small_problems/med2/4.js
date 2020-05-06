// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

/*
Input: Number, as year
Output: Number, count of 13ths in that year whose day is friday (5)

Algorithm
- initialize countFridays = 0
- initialize year as 1-13-year
- for month = 1 to 12
 - if Date(`${month}-13-${year}`).getDay = 5, counter += 1
- return countFridays
*/

function fridayThe13ths(year) {
  let countFridays = 0;
  let month;
  for (month = 0; month < 12; month +=1){
    date = new Date(year, month, 13);
    if(date.getDay() === 5) {
      countFridays += 1;
    }
  }

  console.log(countFridays);
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2