import { Component } from "@angular/core";

@Component({
  selector: 'app-modal-f3-leitor',
  templateUrl:'./modal-f3-leitor.component.html',
  styleUrls:['./modal-f3-leitor.component.scss']
})
export class ModalF3LeitorComponent {
  mostrarLeitor: boolean = false;

  toggleLeitor () {
    this.mostrarLeitor = !this.mostrarLeitor;
  }
}

