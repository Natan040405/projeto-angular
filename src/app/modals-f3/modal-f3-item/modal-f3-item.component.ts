import { Component } from "@angular/core";

@Component({
  selector: 'app-modal-f3-item',
  templateUrl:'./modal-f3-item.component.html',
  styleUrls:['./modal-f3-item.component.scss']
})
export class ModalF3ItemComponent {
  mostrarItem: boolean = false;

  toggleItem () {
    this.mostrarItem = !this.mostrarItem;
  }
}
