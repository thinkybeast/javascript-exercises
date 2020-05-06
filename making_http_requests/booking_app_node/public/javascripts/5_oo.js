const API_PATH = 'http://localhost:3000/api';
const SCHEDULES = '/schedules';
const BOOKINGS = '/bookings';
const STAFF = '/staff_members';
const STUDENTS = '/students';
const ERR_STUDENT_DNE = /booking_sequence: (\d+)/;

var Scheduler = {
  sendJSONRequest: function(endpoint, data, callback) {
    var request = new XMLHttpRequest();
    var json = JSON.stringify(data);
    request.open('POST', endpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', callback);

    request.send(json);
  },

  buildAddStudentForm: function (){
    this.addStudentContainer = document.createElement('div');
    this.addStudentContainer.classList.add('container');
    var h1 = document.createElement('h1');
    h1.textContent = 'Please provide new student details';
    this.addStudentContainer.appendChild(h1);
    this.addStudentForm = document.createElement('form');
    this.addStudentForm.setAttribute('method', 'POST');
    this.addStudentForm.setAttribute('action', STUDENTS);

    var fields = ['Email', 'Name', 'Booking Sequence'];
    var labels = {};
    var inputs = {};

    fields.forEach(function(field) {
      labels[field] = document.createElement('label');
      labels[field].setAttribute('for', field.replace(' ', ''));
      labels[field].textContent = field + ':';
      this.addStudentForm.appendChild(labels[field]);
    }.bind(this));

    fields.forEach(function(field) {
      inputs[field] = document.createElement('input');
      inputs[field].setAttribute('type', 'text');
      inputs[field].setAttribute('name', field.replace(' ', ''));
      labels[field].appendChild(inputs[field]);
    })
    inputs['Email'].value = this.bookingData.student_email;
    inputs['Booking Sequence'].value = this.bookingSequence;
    inputs['Submit'] = document.createElement('input');
    inputs['Submit'].setAttribute('type', 'submit');
    inputs['Submit'].setAttribute('value', 'Submit');
    this.addStudentForm.appendChild(inputs['Submit']);


    this.addStudentContainer.appendChild(this.addStudentForm);
    document.body.appendChild(this.addStudentContainer);
  },

  handleBookingError: function(responseText) {
    var bookingError = responseText.match(ERR_STUDENT_DNE);
    if (bookingError === null) { return; }
    this.bookingSequence = bookingError[1];

    this.buildAddStudentForm();

    this.addStudentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var newStudentData = {
        email: formData.get('Email'),
        name: formData.get('Name'),
        booking_sequence: Number(this.bookingSequence),
      }
      var json = JSON.stringify(newStudentData);
      var xhr = new XMLHttpRequest();

      xhr.open('POST', API_PATH + STUDENTS);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.addEventListener('load', function() {
        switch(xhr.status){
          case 201:
            alert(xhr.responseText);
            // resend booking request, then remove container div
            this.submitBooking(new Event('submit'));
            break;
          default:
            // alert
            alert(xhr.responseText);
            break;
        }
      }.bind(this));

      xhr.send(json);
    }.bind(this));
  },

  getAvailableSchedules: function() {
      this.initializeSelect();
      this.loadSchedules();
  },

  initializeSelect: function() {
    while (this.select.lastElementChild) {
      this.select.removeChild(this.select.lastElementChild);
    }
    this.select.appendChild(new Option('Loading available schedules...'));
  },

  populateSelect: function() {
      var optionText;
      var option;

      while (this.select.lastElementChild) {
        this.select.removeChild(this.select.lastElementChild);
      }

      this.available.forEach(function(schedule) {
        optionText = `${schedule.staffName} | ${schedule.date} | ${schedule.time}`;
        option = new Option(optionText);
        option.value = schedule.id;
        this.select.appendChild(option);
      }.bind(this));
  },

  loadSchedules: function() {
      var request = new XMLHttpRequest();
      request.open('GET', API_PATH + SCHEDULES)
      request.responseType = 'json';

      request.addEventListener('load', function() {
        var schedules = request.response;
        this.available = schedules.filter(function(schedule) {
          return schedule.student_email === null;
        });
        this.mapNamesToSchedules();
      }.bind(this));

      request.send();
  },

  mapNamesToSchedules: function() {
      var request = new XMLHttpRequest();
      request.open('GET', API_PATH + STAFF);
      request.responseType = 'json';

      request.addEventListener('load', function(){
        var allStaff = request.response;
        this.available.forEach(function(schedule) {
          schedule.staffName = allStaff.find((staff) => staff.id === schedule.staff_id).name;
        });
        this.populateSelect();
      }.bind(this));

      request.send();
  },

  bookingAdded: function() {
    alert('Booked');
    this.reset();
    this.getAvailableSchedules();
  },

  submitBooking: function(event) {
      event.preventDefault();
      var formData = new FormData(this.bookingForm);
      this.bookingData = {
        id: formData.get('schedules'),
        student_email: formData.get('email'),
      }

      var xhr = new XMLHttpRequest();
      var json = JSON.stringify(this.bookingData);
      xhr.open('POST', API_PATH + BOOKINGS);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.addEventListener('load', function(){
        switch(xhr.status) {
          case 204:
            this.bookingAdded();
            break;
          case 404:
            alert(xhr.responseText);
            this.handleBookingError(xhr.responseText);
            break;
        }
      }.bind(this));

      xhr.send(json);
  },

  bindEvents: function() {
    this.bookingForm.addEventListener('submit', this.submitBooking.bind(this));
  },

  reset: function() {
    if(document.body.contains(this.addStudentContainer)) {
      document.body.removeChild(this.addStudentContainer);
    }
    this.addStudentContainer = null;
    this.available = null;
    this.bookingData = null;
    this.bookingSequence = null;
    this.bookingForm.reset();
    this.getAvailableSchedules();
  } ,

  init: function() {
    this.bookingForm = document.querySelector('#formSchedules');
    this.select = this.bookingForm.querySelector('select');

    this.bindEvents();
    this.reset();
  },
}

Scheduler.init();