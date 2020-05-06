// Without changing the behavior of the following code, remove the call to event.stopPropagation and refactor the result.

document.querySelector('html').addEventListener('click', function(event) {
  var container = document.querySelector('#container');
  if(!container.contains(event.target)) {
      container.style = 'display: none';
  }
});

// document.querySelector('#container').addEventListener('click', function(event) {
//   event.stopPropagation();
// });