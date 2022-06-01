import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent implements OnInit {
  form!: FormGroup;
  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<TimeEntryComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.data = this.data.dataKey;
    console.log(this.data)
    this.form = this.fb.group({
      date: [this.data.dateStr],
    });
  }

  saveMessage() {
    this.submitClicked.emit(this.data);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
