import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalF3LeitorComponent } from './modal-f3-leitor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ModalF3LeitorComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    ModalF3LeitorComponent,
  ]
})

export class ModalF3LeitorModule {

}
