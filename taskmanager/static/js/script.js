document.addEventListener('DOMContentLoaded', function() {
    // sidebar initialization 
    let sidenav  = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // date Picker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm, yyyy",
      i18n: {done: "Select"}
    });

    // dropdown selection initlazation 
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible accordian initalization
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

  });

