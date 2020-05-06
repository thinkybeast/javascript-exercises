const API_PATH = 'http://localhost:3000/api';
const SCHEDULES = '/schedules';
const BOOKINGS = '/bookings';
const STAFF = '/staff_members';
const STUDENTS = '/students';

var BookingsView = {

  listBookings: function(bookingList, selectedLI) {
    var ul = document.createElement('ul');
    var subLI;

    bookingList.forEach(function(booking) {
      subLI = document.createElement('li');
      subLI.textContent = booking.join(' | ');
      subLI.classList.add('bookingItem');
      ul.appendChild(subLI);
    });

    selectedLI.appendChild(ul);
  },

  getBookings: function(event) {
    var selectedLI = event.target;
    var selectedDate = event.target.firstChild.textContent;

    if (!selectedLI.classList.contains('bookingDate') ||
        this.bookingsByDate[selectedDate]) {
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_PATH + BOOKINGS + `/${selectedDate}`);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function(){
      if(xhr.status === 200) {
        this.bookingsByDate[selectedDate] = xhr.response;
        this.listBookings(this.bookingsByDate[selectedDate], selectedLI);
      }
    }.bind(this));

    xhr.send();
  },

  populateDatesList: function(dates) {
    var li;
    dates.forEach(function(date) {
      li = document.createElement('li')
      li.classList.add('bookingDate');
      li.textContent = date;
      this.datesList.appendChild(li);
    }.bind(this));

    this.datesList.addEventListener('click', this.getBookings.bind(this));
  },

  getBookedDates: function() {
    var request = new XMLHttpRequest();
    request.open('GET', API_PATH + BOOKINGS);
    request.responseType = 'json';

    request.addEventListener('load', function(){
      if(request.status === 200) {
        this.populateDatesList(request.response);
      }
    }.bind(this));

    request.send();
  },

  init: function() {
    this.datesList = document.querySelector('#bookings');
    this.bookingsByDate = {};
    this.getBookedDates();
  },
}

BookingsView.init();