import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalF3SecaoComponent } from './modal-f3-secao.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ModalF3SecaoComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    ModalF3SecaoComponent,
  ]
})

export class ModalF3SecaoModule {

}
