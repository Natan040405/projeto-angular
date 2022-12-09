import { EditoraService } from './../../services/editora.service';
import { SecaoService } from './../../services/secao.service';
import { LocalService } from './../../services/local.service';
import { AutorService } from './../../services/autor.service';
import { ItemAcervoService } from './../../services/itemAcervo.service';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import ItemAcervo from "src/app/models/itemAcervo";
import Secao from "src/app/models/secao";
import Autor from 'src/app/models/autor';
import Editora from 'src/app/models/editora';
import Local from 'src/app/models/local';

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

  autor: Autor[] = []

  local: Local[]=[]

  editora: Editora[] = []

  secao: Secao[] = []

  Autores: Autor[] = []

  ItensAcervo: ItemAcervo[] = []

  Locais: Local[] = []

  Secoes: Secao[] = []

  Editoras: Editora[] = []

  Tipos: Tipo[] = [
    {value:'livro' , viewValue:'Livro'},
    {value:'revista' , viewValue:'Revista'},
    {value:'jornal' , viewValue:'Jornal'},
    {value:'dvdcd' , viewValue:'DVD/CD'},
    {value:'folheto' , viewValue:'Folheto'},
    {value:'artigo' , viewValue:'Artigo'},
  ];

  isChange!: boolean;

  isValidAutor!: boolean;

  isValidLocal!: boolean;

  isValidEditora!: boolean;

  isValidSecao!: boolean;

  constructor(public dialogref: MatDialogRef<ItemAcervoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemAcervo,
    public itemAcervoService: ItemAcervoService,
    public autorService: AutorService,
    public localService: LocalService,
    public secaoService: SecaoService,
    public editoraService: EditoraService,
    ) {
     }

  ngOnInit(): void {
    this.autorService.getAutor().subscribe((data:any) => {
      this.Autores = data;
    })
    this.localService.getLocal().subscribe(data => {
      this.Locais = data;
    })
    this.secaoService.getSecao().subscribe(data => {
      this.Secoes = data;
    })
    this.editoraService.getEditora().subscribe(data => {
      this.Editoras = data;
    })

    if(this.ItensAcervo.map(a=> a.codItem)){
      this.isValidLocal = true;
      this.isValidAutor = true;
      this.isValidSecao = true;
      this.isValidEditora = true;
    }

    if(this.data.codItem != ''){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

  f3codAutor() {
    if(this.isValidAutor != true){
      this.isValidAutor = true;
    } else{
      this.isValidAutor = false;
    }
    this.autorService.getAutorById(this.data.codAutor).subscribe(data => {
      this.autor = data;
      console.log(this.autor)
    })
  }

  f3codLocal() {
    if(this.isValidLocal != true) {
      this.isValidLocal = true;
    } else {
      this.isValidLocal = false;
    }
    this.localService.getLocalById(this.data.codLocal).subscribe(dataValue => {
      this.local = [dataValue];
      if (dataValue!=null){
        this.data.nomeLocal=dataValue.nomeLocal;
        console.log(this.data.nomeLocal)
      }
    })
  }

  f3codEditora() {
    if(this.isValidEditora != true) {
      this.isValidEditora = true;
    } else {
      this.isValidEditora = false;
    }
    this.editoraService.getEditoraById(this.data.codEditora).subscribe(data => {
      this.editora = data;
      console.log(this.data)
      console.log(this.editora)
    })
    console.log(this.data)
  }

  f3codSecao() {
    if(this.isValidSecao != true) {
      this.isValidSecao = true;
    } else {
      this.isValidSecao = false;
    }
    this.secaoService.getSecaoById(this.data.secaoItem).subscribe(data => {
      this.secao = data;
    })
  }

  onCancel(){
    this.dialogref.close();
  }

}
