import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import {TimeEntryComponent} from '../time-entry/time-entry.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  calendarOptions: CalendarOptions = {
    editable: true,
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    contentHeight: 600,
    weekNumbers: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
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
    dialogSubmitSubscription.unsubscribe();
  });
  }
}
