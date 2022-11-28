import { Component } from "@angular/core";

interface Tipo {
  value: string;
  viewValue: string;
}
interface status{
  value: string;
  viewValue:string;
}

@Component({
  selector: 'app-consulta-item',
  templateUrl:'./app-consulta-item.component.html',
  styleUrls:['./app-consulta-item.component.scss']
})
export class AppConsultaItemComponent{

  Tipos: Tipo[] = [
    {value:'livro-0' , viewValue:'Livro'},
    {value:'revista-1' , viewValue:'Revista'},
    {value:'jornal-2' , viewValue:'Jornal'},
    {value:'dvdcd-3' , viewValue:'DVD/CD'},
    {value:'folheto-4' , viewValue:'Folheto'},
    {value:'artigo-5' , viewValue:'Artigo'},
  ];

  Status: status[] = [
    {value: 'Reservado', viewValue: 'Reservado'},
    {value: 'Disponivel', viewValue: 'Disponivel'},
  ];

}
