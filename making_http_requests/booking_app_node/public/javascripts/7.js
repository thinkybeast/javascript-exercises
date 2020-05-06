function cancelBooking(bookingID) {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', `http://localhost:3000/api/bookings/${bookingID}`);
  xhr.addEventListener('load', function(){
    if(xhr.status === 204) {
      alert('Booking canceled.');
    } else {
      alert(xhr.responseText);
    }
  });

  xhr.send();
}

function removeSchedule(scheduleID) {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', `http://localhost:3000/api/schedules/${scheduleID}`);
  xhr.addEventListener('load', function() {
    switch(xhr.status) {
      case 204:
        alert('Schedule successfully removed.');
        break;
      default:
        alert(xhr.responseText);
        break;
    }
  });

  xhr.send();
}

const BOOKED = 'booked';
const AVAIL = 'available';

function populateList(list, which) {
  var loadingText = document.createElement('h3');
  loadingText.textContent = 'Loading schedules...';
  list.insertAdjacentElement('beforebegin', loadingText);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/schedules');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function() {
    list.parentNode.removeChild(loadingText);
    var schedules = xhr.response;
    var scheduleInfo;
    schedules = schedules.filter(function(schedule) {
      return (which === BOOKED) ? !!(schedule.student_email) : !(schedule.student_email);
    });

    while(list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }

    schedules.forEach(function(schedule){
      scheduleInfo = `Id: ${schedule.id} | Staff: ${schedule.staff_id} | ${schedule.date} | ${schedule.time} `;
      if(which === BOOKED) {
        scheduleInfo += `| ${schedule.student_email}`;
      }
      var li = document.createElement('li');
      li.textContent = scheduleInfo;
      list.appendChild(li);
    });

  })
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  var bookingsList = document.querySelector('#booked ul');
  var availableList = document.querySelector('#available ul');
  var formCancelBooking = document.querySelector('#cancelBooking form');
  var formRemoveSchedule = document.querySelector('#removeSchedule form');
  populateList(bookingsList, BOOKED);
  populateList(availableList, AVAIL);

  formCancelBooking.addEventListener('submit', function(event) {
    event.preventDefault();
    var bookingId = formCancelBooking.elements['bookingId'].value;
    cancelBooking(bookingId);
    populateList(bookingsList, BOOKED);
    populateList(availableList, AVAIL);
  });

  formRemoveSchedule.addEventListener('submit', function(event) {
    event.preventDefault();
    var scheduleId = formRemoveSchedule.elements['scheduleId'].value;
    removeSchedule(scheduleId);
    populateList(availableList, AVAIL);
  })

});