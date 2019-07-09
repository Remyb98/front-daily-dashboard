import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './home/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JwtModule } from '@auth0/angular-jwt';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    AboutComponent,
    NewsViewComponent,
    CalendarViewComponent,
    EventViewComponent,
    HomeViewComponent,
    RegisterComponent
  ],
  entryComponents: [
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string|null => {
          return localStorage.getItem('token');
         },
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        skipWhenExpired: false,
        whitelistedDomains: [
          'api.dashboard.remybarberet.fr'
        ]
      }
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
