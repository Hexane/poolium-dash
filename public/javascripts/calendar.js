$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2014-11-30',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Normal Cycle',
					start: '2014-11-01',
					end: '2014-11-15',
				},
				{
					title: 'Long Cycle',
					start: '2014-11-15',
					end: '2014-11-20'
				},
				{
					title: 'Normal Cycle',
					start: '2014-11-20',
					end: '2014-11-30'
				}
			]
		});
		
	});
