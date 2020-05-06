// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.
/*
function randomizer(...callbacks) {
  var maxTime = callbacks.length * 2;
  var duration;
  var intervalId;
  var timer = (function() {
    var seconds = 0;
    return function() {
      seconds += 1;
      console.log(`Elapsed time: ${seconds} seconds`);
      if (seconds >= maxTime) {
        clearInterval(intervalId);
      }
    }
  })();

  var intervalId = setInterval(timer, 1000);
  callbacks.forEach(function(cb) {
    duration = maxTime * Math.random() * 1000;
    setTimeout(cb, duration);
  })
}
*/

function randomizer(...callbacks) {
  var randomInterval;
  var seconds = 0;
  callbacks.forEach(function(cb) {
    randomInterval = Math.floor(Math.random() * callbacks.length * 2) * 1000;
    setTimeout(cb, randomInterval);
  });

  var timer = setInterval(function() {
    console.log(seconds += 1);
    if(seconds === callbacks.length * 2) {
      clearInterval(timer);
    }
  }, 1000);


}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);
