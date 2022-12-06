import { SecaoService } from './../../services/secao.service';
import  Local  from 'src/app/models/local';
import { LocalService } from './../../services/local.service';
import { AutorService } from './../../services/autor.service';
import { ItemAcervoService } from './../../services/itemAcervo.service';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import ItemAcervo from "src/app/models/itemAcervo";
import Secao from "src/app/models/secao";
import Autor from 'src/app/models/autor';

interface Tipo {
  value: string;
  viewValue: string;
}

@Component ({
  selector: 'itemAcervo-dialog',
  templateUrl: './itemAcervo-dialog.component.html',
  styleUrls: ['./itemAcervo-dialog.component.scss']
})



export class ItemAcervoDialogComponent implements OnInit{


  Autores: Autor[] = []

  ItensAcervo: ItemAcervo[] = []

  Locais: Local[] = []

  Secoes: Secao[] = []

  Tipos: Tipo[] = [
    {value:'livro' , viewValue:'Livro'},
    {value:'revista' , viewValue:'Revista'},
    {value:'jornal' , viewValue:'Jornal'},
    {value:'dvdcd' , viewValue:'DVD/CD'},
    {value:'folheto' , viewValue:'Folheto'},
    {value:'artigo' , viewValue:'Artigo'},
  ];

  isChange!: boolean;

  isValid!: boolean;

  constructor(public dialogref: MatDialogRef<ItemAcervoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemAcervo,
    public itemAcervoService: ItemAcervoService,
    public autorService: AutorService,
    public localService: LocalService,
    public secaoService: SecaoService) {
     }

  ngOnInit(): void {
    this.autorService.getAutor().subscribe((data:any) => {
      this.Autores = data;
      console.log(data)
    })
    this.localService.getLocal().subscribe(data => {
      this.Locais = data;
    })
    this.secaoService.getSecao().subscribe(data => {
      this.Secoes = data
      console.log(data)
    })
    if(this.data.codItem != ''){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

  valor() {
    this.isValid = true;
  }

  onCancel(){
    this.dialogref.close();
  }

}
