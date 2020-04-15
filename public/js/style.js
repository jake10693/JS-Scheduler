document.addEventListener('DOMContentLoaded', function () {
  //Materialize JS
  const collapsible = document.querySelectorAll('.collapsible');
  const collapsibleInstances = M.Collapsible.init(collapsible, 300);

  $('.modal').modal();
  $('select').formSelect();
  $('.datepicker').datepicker({ format: 'yyyy-mm-dd' });
  $('.timepicker').timepicker();
});

