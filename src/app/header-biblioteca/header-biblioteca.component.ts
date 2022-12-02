import { Component } from "@angular/core";

@Component({
  selector: 'app-header-biblioteca',
  templateUrl:'./header-biblioteca.component.html',
  styleUrls:['./header-biblioteca.component.scss']
})
export class HeaderBibliotecaComponent{
  isMenuOpened: boolean;
  AbreMenu() {
    if(this.isMenuOpened == true){
      this.isMenuOpened = false;
    }else{
      this.isMenuOpened = true;
    }
  }

  FechaMenu() {
    this.isMenuOpened = false;
  }
}
