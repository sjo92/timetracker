import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule, FormsModule, ReactiveFormsModule
  ]
})
export class MaterialModule {}