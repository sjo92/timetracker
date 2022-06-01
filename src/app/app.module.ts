import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//FireBase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';

//FullCalendar Module
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import listPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

//Angular Material
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  listPlugin,
  timeGridPlugin,interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    TimeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MaterialModule,   
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
