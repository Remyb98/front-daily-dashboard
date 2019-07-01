import {Component, OnInit, ViewChild} from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import {FullCalendarComponent} from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [timeGridPlugin];

  events: Array<any> = [
    { title: 'event 1', date: '2019-06-28' },
    { title: 'event 2', date: '2019-06-29 12:00:00', description: 'lorem ipsum' },
    { title: 'event 3', date: '2019-06-28 11:00:00', description: 'lorem ipsum', id: 'BANANA' },
  ];

  infoEvent(event) {
    console.log(event);
    console.log(this.calendarComponent.getApi().getEvents());
  }

  constructor() { }

  ngOnInit() {
  }

}
