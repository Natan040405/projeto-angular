import { Component } from "@angular/core";

@Component({
  selector: 'app-modal-f3-editora',
  templateUrl:'./modal-f3-editora.component.html',
  styleUrls:['./modal-f3-editora.component.scss']
})
export class ModalF3EditoraComponent {
  mostrarEditora: boolean = false;

  toggleEditora () {
    this.mostrarEditora = !this.mostrarEditora;
  }
}
