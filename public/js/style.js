document.addEventListener('DOMContentLoaded', function () {
  //Materialize JS
  const elems = document.querySelectorAll('.collapsible');
  const instances = M.Collapsible.init(elems, 300);

  //Calender JS
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    defaultView: 'dayGridMonth',
    defaultDate: '2020-04-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'All Day Event',
        start: '2020-04-01'
      },
      {
        title: 'Long Event',
        start: '2020-04-07',
        end: '2020-04-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-04-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-04-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2020-04-11',
        end: '2020-04-13'
      },
      {
        title: 'Meeting',
        start: '2020-04-12T10:30:00',
        end: '2020-04-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-04-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-04-12T14:30:00'
      },
      {
        title: 'data',
        url: "https://thebigdeal916.github.io/day-planner/",
        start: '2020-04-13'
      },
      {
        title: 'data',
        url: "https://thebigdeal916.github.io/day-planner/",
        start: '2020-04-14',

      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-04-28'
      }
    ]
  });

  calendar.render();
});