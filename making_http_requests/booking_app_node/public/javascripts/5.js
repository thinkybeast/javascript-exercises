const API_PATH = 'http://localhost:3000/api';
const SCHEDULES = '/schedules';
const BOOKINGS = '/bookings';
const STAFF = '/staff_members';
const STUDENTS = '/students';

function sendJSONRequest(endpoint, data, callback) {
  var request = new XMLHttpRequest();
  var json = JSON.stringify(data);
  request.open('POST', endpoint);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', callback);

  request.send(json);
}

function handleBookingError(responseText, bookingData) {
  var bookingError = responseText.match(/booking_sequence: (\d+)/);
  if (bookingError === null) { return; }
  var bookingSequence = bookingError[1];
  // build add student form
  var addStudentContainer = document.createElement('div');
  addStudentContainer.classList.add('container');
  var h1 = document.createElement('h1');
  h1.textContent = 'Please provide new student details';
  addStudentContainer.appendChild(h1);
  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('action', STUDENTS);

  var fields = ['Email', 'Name', 'Booking Sequence'];
  var labels = {};
  var inputs = {};

  fields.forEach(function(field) {
    labels[field] = document.createElement('label');
    labels[field].setAttribute('for', field.replace(' ', ''));
    labels[field].textContent = field + ':';
    form.appendChild(labels[field]);
  });

  fields.forEach(function(field) {
    inputs[field] = document.createElement('input');
    inputs[field].setAttribute('type', 'text');
    inputs[field].setAttribute('name', field.replace(' ', ''));
    labels[field].appendChild(inputs[field]);
  })
  inputs['Email'].value = bookingData.student_email;
  inputs['Booking Sequence'].value = bookingSequence;
  inputs['Submit'] = document.createElement('input');
  inputs['Submit'].setAttribute('type', 'submit');
  inputs['Submit'].setAttribute('value', 'Submit');
  form.appendChild(inputs['Submit']);


  addStudentContainer.appendChild(form);
  document.body.appendChild(addStudentContainer);

  // attach submit listener to that form
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = {
      email: inputs['Email'].value,
      name: inputs['Name'].value,
      booking_sequence: Number(bookingSequence),
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', API_PATH + STUDENTS);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', function() {
      switch(xhr.status){
        case 201:
          alert(xhr.responseText);
          // resend booking request, then remove container div
          sendJSONRequest((API_PATH + BOOKINGS), bookingData, function() {
            alert('Booked');
            document.body.removeChild(addStudentContainer);
          });
          break;
        default:
          // alert
          alert(xhr.responseText);
          break;
      }
    })

    xhr.send(json);
  })

}

document.addEventListener('DOMContentLoaded', function(){
  var scheduleForm = document.querySelector('#formSchedules');
  var select = scheduleForm.querySelector('select');
  var available;

  function getAvailableSchedules() {
    function mapNamesToSchedules() {
      var request = new XMLHttpRequest();
      request.open('GET', API_PATH + STAFF);
      request.responseType = 'json';

      request.addEventListener('load', function(){
        var allStaff = request.response;
        available.forEach(function(schedule) {
          schedule.staffName = allStaff.find((staff) => staff.id === schedule.staff_id).name;
        });
        populateSelect();
      });

      request.send();
    }

    function populateSelect() {
      var optionText;
      var option;

      while (select.lastElementChild) {
        select.removeChild(select.lastElementChild);
      }

      available.forEach(function(schedule) {
        optionText = `${schedule.staffName} | ${schedule.date} | ${schedule.time}`;
        option = new Option(optionText);
        option.value = schedule.id;
        select.appendChild(option);
      })
    }

    function initializeSelect() {
      while (select.lastElementChild) {
        select.removeChild(select.lastElementChild);
      }
      select.appendChild(new Option('Loading available schedules...'));
    }

    function loadSchedules() {
      var request = new XMLHttpRequest();
      request.open('GET', API_PATH + SCHEDULES)
      request.responseType = 'json';

      request.addEventListener('load', function() {
        var schedules = request.response;
        available = schedules.filter(function(schedule) {
          return schedule.student_email === null;
        });
        mapNamesToSchedules();
      });

      request.send();
    }

    initializeSelect();
    loadSchedules();
  };

  scheduleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(scheduleForm);
    var data = {
      id: formData.get('schedules'),
      student_email: formData.get('email'),
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', API_PATH + BOOKINGS);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', function(){
      switch(xhr.status) {
        case 204:
          alert('Booked');
          scheduleForm.reset();
          getAvailableSchedules();
          break;
        case 404:
          alert(xhr.responseText);
          handleBookingError(xhr.responseText, data);
          break;
      }
    });

    xhr.send(json);
  });

  getAvailableSchedules();
});