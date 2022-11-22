import { Component } from "@angular/core";

@Component({
  selector: 'app-header-biblioteca',
  templateUrl:'./header-biblioteca.component.html',
  styleUrls:['./header-biblioteca.component.scss']
})
export class HeaderBibliotecaComponent{
  isMenuOpened: boolean = false;
  ConsultaseReservas(): void {
    this.isMenuOpened =  !this.isMenuOpened;
  }
}
