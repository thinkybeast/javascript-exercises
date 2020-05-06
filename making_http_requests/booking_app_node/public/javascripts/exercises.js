const API_PATH = 'http://localhost:3000/api';
const SCHEDULES = '/schedules';
const BOOKINGS = 'bookings';
const STAFF = '/staff_members';
const STUDENTS = '/students';

function availableSchedules() {
  var request = new XMLHttpRequest();
  request.open('GET', API_PATH + '/schedules')
  request.responseType = 'json';
  // request.timeout = 5000;

  request.addEventListener('load', function(event) {
    var schedules = request.response;
    var available = schedules.filter(function(schedule) {
      return schedule.student_email === null;
    });
    var staffKey;

    if(available.length > 0) {
      var openSchedules = available.reduce(function(openSchedules, schedule){
        staffKey = 'staff ' + String(schedule.staff_id);
        openSchedules[staffKey] = (openSchedules[staffKey] + 1) || 1;
        return openSchedules;
      }, {})
      console.log("Open Schedules by staff:");
      console.log(openSchedules);
    } else {
      console.log('No schedules available!');
    }
  });

  request.addEventListener('timeout', function(){
    console.log('Unfortunately, the request timed out. Please try again.');
  });

  request.addEventListener('loadend', function() {
    console.log('Request completed.');
  })

  request.send();
}

// Implement a form for adding new staff, and then use the booking app API to add the staff to the database. Your implementation should handle the different possible responses of the server and inform the user of the outcome.

document.addEventListener('DOMContentLoaded', function(){
  var newStaffForm = document.querySelector('#addstaff form');
  newStaffForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = new FormData(newStaffForm);
    var request = new XMLHttpRequest();
    request.open('POST', API_PATH + STAFF);

    request.addEventListener('load', function() {
      if (request.status === 201) {
        var newStaffId = JSON.parse(request.response).id;
        alert('Staff successfully created with id ' + String(newStaffId));
        newStaffForm.reset();
      } else {
        alert(request.response);
      }
    })

    request.send(data);
  });
});

// Add new schedules
document.addEventListener('DOMContentLoaded', function() {
  function formatDate(date) {
    var dateParts = date.split('-');
    dateParts.push(dateParts.shift());
    return dateParts.join('-');
  };
  function formDataToJSON(formData) {
    var schedulesObject = { schedules: [] };
    var names = formData.getAll('staff_names');
    var dates = formData.getAll('schedule_date');
    var times = formData.getAll('schedule_time');
    var schedule;

    for(let i = 0; i < names.length; i += 1) {
      schedule = {};
      schedule.staff_id = staffMembers.find((staff) => staff.name === names[i]).id;
      schedule.date = formatDate(dates[i]);
      schedule.time = times[i];
      console.log('pushing', schedule);
      schedulesObject.schedules.push(schedule);
    }

    return schedulesObject;
  }

  var addMoreSchedulesButton = document.querySelector('#add_more');
  var addSchedulesForm = document.querySelector('#add_schedules form');
  var formSubmit = addSchedulesForm.querySelector('[type="submit"]');
  var schedule = addSchedulesForm.firstElementChild;
  var staffSelect = schedule.querySelector('select');
  var staffMembers;

  var request = new XMLHttpRequest();

  request.open('GET', API_PATH + STAFF);
  request.responseType = 'json';
  request.addEventListener('load', function() {
    var option;
    staffMembers = request.response;
    staffMembers.forEach(function(staff) {
      option = new Option(staff.name);
      staffSelect.appendChild(option);
    })
  })
  request.send();

  addMoreSchedulesButton.addEventListener('click', function(){
    var newSchedule = schedule.cloneNode(true);
    formSubmit.insertAdjacentElement('beforebegin', newSchedule);
  })

  addSchedulesForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(addSchedulesForm);
    var data = JSON.stringify(formDataToJSON(formData));
    var request = new XMLHttpRequest();
    request.open('POST', API_PATH + SCHEDULES);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function(event) {
      switch(request.status) {
        case 201:
          alert(request.responseText);
          addSchedulesForm.reset();
          break;
        case 400:
          alert(request.responseText);
          break;
      }
    });

    console.log('Sending:', data);
    request.send(data);
  });
});
