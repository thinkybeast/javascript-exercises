// We were asked to implement a task list and the following functionality:

// adding a new task
// completing a given number of existing tasks
// displaying the task list
// We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.

// Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.

var todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  var tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    // console.log(todos[0] + ' complete!');
    // delete todos[0]; // this is where the bug is introduced;
    // the delete keyword deletes the given key-value association from an object. because arrays are objects, the keyword works and deletes the 0th element from the array. however, the array is not shifted in place, thus each successive call after the first attempts to the delete the association at the 0th index, which is now undefined. the method shift or splice should be used instead.
    console.log(todos.shift() + ' complete!');
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(tasksComplete + ' tasks completed; ' + todos.length + ' remaining.');
  }
}

function displayTaskList() {
  var i;

  console.log('ToDo list (' + todos.length + ' tasks):')
  console.log('---------------------');

  for (i = 0; i < todos.length; i++) {
    console.log('-- ' + todos[i]);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();