import { Component } from '@angular/core';

interface Tipo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-item-acervo',
  templateUrl:'./app-cadastro-item-acervo.component.html',
  styleUrls:['./app-cadastro-item-acervo.component.scss']
})
export class AppCadastroItemAcervoComponent{
  Tipos: Tipo[] = [
    {value:'livro-0' , viewValue:'Livro'},
    {value:'revista-1' , viewValue:'Revista'},
    {value:'jornal-2' , viewValue:'Jornal'},
    {value:'dvdcd-3' , viewValue:'DVD/CD'},
    {value:'folheto-4' , viewValue:'Folheto'},
    {value:'artigo-5' , viewValue:'Artigo'},
  ];
}
