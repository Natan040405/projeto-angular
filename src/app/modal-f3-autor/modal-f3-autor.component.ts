import { Component } from "@angular/core";

export interface PeriodicElement {
  nomeAutor: string;
  codAutor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codAutor: 1, nomeAutor: 'Hydrogen'},
  {codAutor: 2, nomeAutor: 'Helium'},
  {codAutor: 3, nomeAutor: 'Lithium'},
  {codAutor: 4, nomeAutor: 'Beryllium'},
  {codAutor: 5, nomeAutor: 'Boron'},
  {codAutor: 6, nomeAutor: 'Carbon'},
  {codAutor: 7, nomeAutor: 'Nitrogen'},
  {codAutor: 8, nomeAutor: 'Oxygen'},
  {codAutor: 9, nomeAutor: 'Fluorine'},
  {codAutor: 10, nomeAutor: 'Neon'},
];

@Component({
  selector: 'app-modal-f3-autor',
  templateUrl:'./modal-f3-autor.component.html',
  styleUrls:['./modal-f3-autor.component.scss']
})
export class ModalF3AutorComponent {
  displayedColumns: string[] = ['codAutor', 'nomeAutor'];
  dataSource = ELEMENT_DATA;

  mostrarAutor: boolean = false;

  toggleAutor () {
    this.mostrarAutor = !this.mostrarAutor;
  }


}
