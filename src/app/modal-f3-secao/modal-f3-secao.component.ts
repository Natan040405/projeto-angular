import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-f3-secao',
  templateUrl: './modal-f3-secao.component.html',
  styleUrls: ['./modal-f3-secao.component.scss'],
})
export class ModalF3SecaoComponent {
  mostrarSecao: boolean = false;

  toggleSecao () {
    this.mostrarSecao = !this.mostrarSecao;
  }
}
