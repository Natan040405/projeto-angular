import { ItemAcervoService } from './../../services/itemAcervo.service';
import { ItemAcervoDialogComponent } from './../../dialogs/itemAcervo-dialog/itemAcervo-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import ItemAcervo from 'src/app/models/itemAcervo';


@Component({
  selector: 'app-cadastro-item-acervo',
  templateUrl:'./app-cadastro-item-acervo.component.html',
  styleUrls:['./app-cadastro-item-acervo.component.scss']
})
export class AppCadastroItemAcervoComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(
    public dialog: MatDialog,
    public itemAcervoService: ItemAcervoService
    ){
      this.itemAcervoService.getItemAcervo()
    .subscribe(data => {
      this.itemAcervo = data
    })
  }
  itemAcervo: ItemAcervo[] = []

  displayedColumns: string[] = ['codItem', 'nomeItem', 'tipoItem', 'numExemplar', 'volItem', 'nomeAutor',
  'codAutor', 'nomeLocal', 'codLocal', 'nomeEditora', 'codEditora',  'localizacaoItem', 'secaoItem', 'anoEditItem', 'actions']

  openDialog(itemAcervo: ItemAcervo | null) {
    const DialogRef = this.dialog.open(ItemAcervoDialogComponent, {
      width: '100%',
      data: itemAcervo != null ?
      itemAcervo : {
        codItem: '',
        codLocal: '',
        numExemplar: '',
        nomeItem: '',
        codAutor: '',
        nomeAutor: '',
        codEditora: '',
        nomeEditora: '',
        tipoItem: '',
        nomeLocal: '',
        volItem: '',
        anoEditItem: '',
        localizacaoItem: '',
        secaoItem: '',
      }
    })
  }
}
