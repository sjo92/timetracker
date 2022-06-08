import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import {TimeEntryComponent} from '../time-entry/time-entry.component';
import { MatDialog } from '@angular/material/dialog';

import  { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  calendarOptions: any = {
    editable: true,
    initialView: 'dayGridWeek',
    dateClick: this.handleDateClick.bind(this),
    height: 800,
    contentHeight: 780,
    aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio
    weekNumbers: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    events: [],
    droppable: true,
  };

  ngOnInit(): void {
  }

  handleDateClick(arg: any){
    let dialogRef = this.dialog.open(TimeEntryComponent, {
      width: '500px',
      height: '410px',
      data: { dataKey: arg },
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    const dialogSubmitSubscription = 
    dialogRef.componentInstance.submitClicked.subscribe(result => {
      console.log(result);
    this.calendarOptions.events = this.calendarOptions.events.concat({
      title: result.description,
      start: result.date,
      startTime: result.start,
      endTime: result.end,
    })
    dialogSubmitSubscription.unsubscribe();
  });
  }
}
