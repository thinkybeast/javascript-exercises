// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

var triangle = function(length) {
  // for i = 1 to length
  // log '*'.repeat(i).padStart(length-i)

  for (var i = 1; i <= length; i += 1) {
    console.log('*'.repeat(i).padStart(length));
  }
};


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********