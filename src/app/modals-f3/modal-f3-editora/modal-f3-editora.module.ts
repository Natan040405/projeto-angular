import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ModalF3EditoraComponent } from "./modal-f3-editora.component";
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ModalF3EditoraComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    ModalF3EditoraComponent,
  ]
})
export class ModalF3EditoraModule {

}
