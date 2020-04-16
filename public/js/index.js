var calendarEl = document.getElementById('calendar');
var headerEl = document.getElementById('header')

headerEl.textContent = "Monthly Schedule";

function renderCalendarEvents() {
  $.ajax({
    url: "/api/events",
    method: "GET"
  }).then(function (data) {

    var myEvents = [];

    for (let i = 0; i < data.length; i++) {
      let name = data[i].name;
      let startTime = data[i].startTime;
      let endTime = data[i].endTime;

      let dayObject = {
        title: `${name} ${startTime} - ${endTime}`,
        start: data[i].startDate,
        end: data[i].endDate,
        color: data[i].color
      }
      myEvents.push(dayObject);
    }
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid'],
      defaultView: 'dayGridMonth',
      defaultDate: '2020-04-07',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: myEvents
    });
    calendar.render();
  });
}

renderCalendarEvents();