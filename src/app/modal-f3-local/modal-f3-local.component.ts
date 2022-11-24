import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-f3-local',
  templateUrl: './modal-f3-local.component.html',
  styleUrls: ['./modal-f3-local.component.scss'],
})
export class ModalF3LocalComponent {
  mostrarLocal: boolean = false;

  toggleLocal () {
    this.mostrarLocal = !this.mostrarLocal;
  }
}
