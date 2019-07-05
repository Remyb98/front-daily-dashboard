import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent {

  /**
   * @TODO: Change event type to an event interface
   */
  constructor(@Inject(MAT_DIALOG_DATA) public event: any) { }

}
