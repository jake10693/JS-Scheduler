document.addEventListener('DOMContentLoaded', function () {
  //Materialize JS
  const collapsible = document.querySelectorAll('.collapsible');
  const collapsibleInstances = M.Collapsible.init(collapsible, 300);

  $('.modal').modal();
  $('select').formSelect();
  $('.datepicker').datepicker({format: 'yyyy-mm-dd'});
  $('.timepicker').timepicker();
  //Calender JS
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid'],
    defaultView: 'dayGridMonth',
    defaultDate: '2020-04-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        groupId: 'blueEvents', // recurrent events in this group move together
        daysOfWeek: [ '4' ],
        startTime: '10:45:00',
        endTime: '12:45:00'
      },
      {
        daysOfWeek: [ '3' ], // these recurrent events move separately
        startTime: '11:00:00',
        endTime: '11:30:00',
        color: 'red'
      },
      {
        id: "1",
        title: "Employee One 9AM - 10PM",
        start: "2020-04-14",
        end: "2020-04-16",
        color: "",
      }
    ],
    editable: true
  });
    calendar.render();
});

