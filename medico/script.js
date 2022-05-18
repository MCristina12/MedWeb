document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2022-05-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Paciente:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
        if (confirm('¿Desea cancelar la cita?')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        
        {
          title: 'Juanito Alcachofa',
          start: '2022-05-18T16:00:00',
          end: '2022-05-18T16:15:00'
        },
        {
            title: 'Tony Stark',
            start: '2022-05-20T10:00:00',
            end: '2022-05-20T10:15:00'
        },
        {
            title: 'Mini Hulk',
            start: '2022-05-21T07:00:00',
            end: '2022-05-21T07:15:00'
        },
        {
            title: 'Harry Potter',
            start: '2022-05-25T16:00:00',
            end: '2022-05-25T16:15:00'
        },
        {
            title: 'Doctor Strange',
            start: '2022-05-27T14:00:00',
            end: '2022-05-27T14:15:00'
        } 
      ]
    });

    calendar.render();
  });