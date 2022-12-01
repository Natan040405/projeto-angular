import { Component } from "@angular/core";
import Leitor from "src/app/models/leitor";

interface Uf {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-leitor',
  templateUrl:'./app-cadastro-leitor.component.html',
  styleUrls:['./app-cadastro-leitor.component.scss']
})



export class AppCadastroLeitorComponent{
  Ufs: Uf[] = [
    {value: 'AC', viewValue: 'AC'},
    {value: 'AL', viewValue: 'AL'},
    {value: 'AP', viewValue: 'AP'},
    {value: 'AM', viewValue: 'AM'},
    {value: 'BA', viewValue: 'BA'},
    {value: 'CE', viewValue: 'CE'},
    {value: 'DF', viewValue: 'DF'},
    {value: 'ES', viewValue: 'ES'},
    {value: 'GO', viewValue: 'GO'},
    {value: 'MA', viewValue: 'MA'},
    {value: 'MT', viewValue: 'MT'},
    {value: 'MS', viewValue: 'MS'},
    {value: 'MG', viewValue: 'MG'},
    {value: 'PA', viewValue: 'PA'},
    {value: 'PB', viewValue: 'PB'},
    {value: 'PR', viewValue: 'PR'},
    {value: 'PE', viewValue: 'PE'},
    {value: 'PI', viewValue: 'PI'},
    {value: 'RJ', viewValue: 'RJ'},
    {value: 'RN', viewValue: 'RN'},
    {value: 'RS', viewValue: 'RS'},
    {value: 'RO', viewValue: 'RO'},
    {value: 'RR', viewValue: 'RR'},
    {value: 'SC', viewValue: 'SC'},
    {value: 'SP', viewValue: 'SP'},
    {value: 'SE', viewValue: 'SE'},
    {value: 'TO', viewValue: 'TO'}
  ];

  leitor: Leitor[] = [];
  displayedColumns: string[] = ['codLeitor', 'nomeLeitor', 'sexoLeitor', 'dataNascimento', 'cpfLeitor',
   'rgLeitor', 'emailLeitor', 'telefLeitor', 'cellLeitor', 'endRuaLeitor', 'endBairroLeitor',
   'endCidadeLeitor', 'endCepLeitor', 'endUFLeitor', 'endNumeroLeitor', 'actions' ]

  openDialog(leitor: Leitor | null) {


  }
}
