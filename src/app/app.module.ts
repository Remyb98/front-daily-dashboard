import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { AboutComponent } from './about/about.component';
import { NewsViewComponent } from './dashboard/news-view/news-view.component';
import { CalendarViewComponent } from './dashboard/calendar-view/calendar-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { EventViewComponent } from './dashboard/event-view/event-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    AboutComponent,
    NewsViewComponent,
    CalendarViewComponent,
    EventViewComponent
  ],
  entryComponents: [
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    FullCalendarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
