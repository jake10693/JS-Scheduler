document.addEventListener('DOMContentLoaded', function () {
  //Materialize JS
  const collapsible = document.querySelectorAll('.collapsible');
  const collapsibleInstances = M.Collapsible.init(collapsible, 300);

  const modal = document.querySelectorAll('.modal');
  const modalInstances = M.Modal.init(modal, 300);

  const select = document.querySelectorAll('select');
  const selectInstances = M.FormSelect.init(select, 200);

  //Calender JS
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [  'dayGrid', 'timeGrid', 'list' ],
    defaultView: 'dayGridMonth',
    defaultDate: '2020-04-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
   
  });

  calendar.render();
});

