import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ModalF3AutorComponent } from "./modal-f3-autor.component";
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ModalF3AutorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    ModalF3AutorComponent,
  ]
})
export class ModalF3AutorModule {

}
