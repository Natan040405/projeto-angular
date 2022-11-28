import { Component } from '@angular/core';

interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './app-consulta-reserva.component.html',
  styleUrls: ['./app-consulta-reserva.component.scss']
})
export class AppConsultaReservaComponent {

  Tipos: Tipo[] = [
    {value:'livro-0' , viewValue:'Livro'},
    {value:'revista-1' , viewValue:'Revista'},
    {value:'jornal-2' , viewValue:'Jornal'},
    {value:'dvdcd-3' , viewValue:'DVD/CD'},
    {value:'folheto-4' , viewValue:'Folheto'},
    {value:'artigo-5' , viewValue:'Artigo'},
  ];

}
