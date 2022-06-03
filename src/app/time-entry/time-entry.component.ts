import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent implements OnInit {
  form!: FormGroup;
  formControl = new FormControl('');

  @Output() submitClicked = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<TimeEntryComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.data = this.data.dataKey;
    this.form = new FormGroup({
      id: new FormControl(Math.random()*1000),
      date: new FormControl(this.data.dateStr),
      start: new FormControl(this.getTime()),
      end: new FormControl(''),
      hours: new FormControl(''),
      description: new FormControl(''),

    });
  }

  saveMessage() {
    this.submitClicked.emit(this.form.value);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

  getTime() {
    var today = new Date();
    var hours =  this.convertTime(today.getHours());
    var minutes = this.convertTime(today.getMinutes())
    var time = hours + ":" + minutes
    return time;
  }
  //returns with an extra 0 in front if the given time is less than 9 
  convertTime(time:any) {
    return time<10?'0'+time:time;
  }

  getHours() {
    if(this.form !==null && this.form.get('end'))  {
      var a = this.form.get('start')!.value
      var b = this.form.get('end')!.value;
      var a_split = a.split(":");
      var a_time= a_split[0]*3600+a_split[1]*60;
      var b_split = b.split(":");
      var b_time= b_split[0]*3600+b_split[1]*60;

      var difference = Math.abs(b_time - a_time);
      var hours = this.convertTime(Math.floor(difference/3600));
      var minutes = this.convertTime((difference%3600)/60)

      this.form.patchValue(
        {
          hours: hours+':'+minutes
        }
      )
    }

  }


  
}
