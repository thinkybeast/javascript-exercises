

var tracker = (function() {
  var events = [];

  return  {
    add: function(event) {
      events.push(event);
    },
    list: function() {
      return events.slice();
    },
    clear: function() {
      return events.length = 0;
    },
    elements: function() {
      return events.map(function(event) {
        return event.target;
      });
    },
  }
})();

function track(callback) {
  function eventAlreadyTracked(e) {
    return tracker.list().includes(e);
  }
  return function(e) {
    if(!eventAlreadyTracked(e)) {
      tracker.add(e);
      callback(e);
    }
  }
}

var divRed = document.getElementById('red');
var divBlue = document.getElementById('blue');
var divOrange = document.getElementById('orange');
var divGreen = document.getElementById('green');


divRed.addEventListener('click', track(function(event) {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(function(event) {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(function(event) {
  document.body.style.background = 'green';
}));