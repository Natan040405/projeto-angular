import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ModalF3ItemComponent } from "./modal-f3-item.component";

@NgModule({
  declarations: [
    ModalF3ItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ModalF3ItemComponent,
  ]
})
export class ModalF3ItemModule {

}
