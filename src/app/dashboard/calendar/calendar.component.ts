import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
	ngOnInit() {
		var calendar: any = $('#calendar');
		calendar.fullCalendar({
		     eventClick: function(calEvent: any, jsEvent: any, view: any) {
		        alert('Event: ' + calEvent.title);
		        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
		        alert('View: ' + view.name);
		    }
		});
	}
}
