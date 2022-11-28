import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalF3LocalComponent } from './modal-f3-local.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ModalF3LocalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    ModalF3LocalComponent,
  ]
})

export class ModalF3LocalModule {

}
