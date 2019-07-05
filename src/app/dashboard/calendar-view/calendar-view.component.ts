import { Component, OnInit, ViewChild } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';

import { EventViewComponent } from '../event-view/event-view.component';
import mockAgenda from './mockCalendar';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  constructor(public eventDialog: MatDialog) { }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [timeGridPlugin];

  calendarHeight;

  events: Array<any> = mockAgenda;

  static isFullDayEvent(event) {
    const start: Date = new Date(event.start);
    const end: Date = new Date(event.end);
    const eventTime: number = end.getTime() - start.getTime();
    if ((eventTime / 1000) % (24 * 3600) === 0) {
      event.allDay = (eventTime / 1000) / (24 * 3600);
    }
  }

  onClickEvent(event) {
    console.log(event);
    this.eventDialog.open(EventViewComponent, {
      data: event
    });
  }

  ngOnInit() {
    this.calendarHeight = 'auto';
    this.events.forEach(event => CalendarViewComponent.isFullDayEvent(event));
  }

}
