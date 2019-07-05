import { Component, OnInit, ViewChild } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';

import { EventViewComponent } from '../event-view/event-view.component'

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [timeGridPlugin];

  calendarHeight;

  events: Array<any> = [
    {"title":"Now event","start": new Date(),"description":"The duration should be bugged stupid Date object","organizer":"System"},
    {"title":"One day event","start":"2019-07-09T00:00:00+02:00","end":"2019-07-10T00:00:00+02:00","duration":null,"dtstamp":"2019-07-02T10:38:29+02:00","uid":"6on0ljr1upig8n8bm2dajnhjgb@google.com","created":"2019-06-11T23:36:01+02:00","lastmodified":null,"description":null,"location":null,"sequence":null,"status":"CONFIRMED","transp":"TRANSPARENT","organizer":null,"attendee":null},
    {"title":"Two days event","start":"2019-07-10T00:00:00+02:00","end":"2019-07-12T00:00:00+02:00","duration":null,"dtstamp":"2019-07-02T10:38:29+02:00","uid":"6on0ljr1upig8n8bm2dajnhjgb@google.com","created":"2019-06-11T23:36:01+02:00","lastmodified":null,"description":null,"location":null,"sequence":null,"status":"CONFIRMED","transp":"TRANSPARENT","organizer":null,"attendee":null},
    {"title":"Colored event","start":"2019-07-10T14:00:00+02:00","end":"2019-07-10T17:00:00+02:00","color":"#00FF00","duration":null,"dtstamp":"2019-07-02T10:38:29+02:00","uid":"0aj78t47t3a24sbbcc7end705f@google.com","created":"2019-06-11T22:18:17+02:00","lastmodified":null,"description":"C'est la description de l'event","location":"Maison","sequence":null,"status":"CONFIRMED","transp":"OPAQUE","organizer":"Rémy","attendee":null},
    {"title":"Simple event","start":"2019-07-09T14:00:00+02:00","end":"2019-07-09T15:00:00+02:00","duration":null,"dtstamp":"2019-07-02T10:38:29+02:00","uid":"0aj78t47t3a24sbbcc7end705f@google.com","created":"2019-06-11T22:18:17+02:00","lastmodified":null,"description":"C'est la description de l'event","location":"Maison","sequence":null,"status":"CONFIRMED","transp":"OPAQUE","organizer":null,"attendee":null}
  ];

  constructor(public eventDialog: MatDialog) { }

  onClickEvent(event) {
    console.log(event);
    this.eventDialog.open(EventViewComponent, {
      data: event
    });
  }

  /**
   * Maybe better to check it directly in the backend
   */
  isFullDayEvent(event) {
    let start: Date = new Date(event.start);
    let end: Date = new Date(event.end);
    let eventTime: number = end.getTime() - start.getTime();
    if ((eventTime / 1000) % (24 * 3600) === 0) {
      event.allDay = (eventTime / 1000) / (24 * 3600);
    }
  }

  ngOnInit() {
    this.calendarHeight = 'auto';
    this.events.forEach(event => this.isFullDayEvent(event));
  }

}
