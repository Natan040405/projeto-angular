import { ItemAcervoService } from './../../services/itemAcervo.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import ItemAcervo from 'src/app/models/itemAcervo';
import { MatTable } from '@angular/material/table';
import { ItemAcervoDialogComponent } from 'src/app/dialogs/itemAcervo-dialog/itemAcervo-dialog.component';


@Component({
  selector: 'app-cadastro-item-acervo',
  templateUrl:'./app-cadastro-item-acervo.component.html',
  styleUrls:['./app-cadastro-item-acervo.component.scss']
})
export class AppCadastroItemAcervoComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
    public itemAcervoService: ItemAcervoService,
    ){
      this.itemAcervoService.getItemAcervo()
    .subscribe(data => {
      this.itemAcervo = data
    })
  }

  ngOnInit(): void {
  }

  @ViewChild(MatTable)
  tabelaItem!: MatTable<any>
  itemAcervo: ItemAcervo[] = [];
  displayedColumns: string[] = ['codItem', 'nomeItem', 'tipoItem', 'numExemplar', 'volItem', 'nomeAutor',
  'codAutor', 'nomeLocal', 'codLocal', 'nomeEditora', 'codEditora',  'localizacaoItem', 'secaoItem', 'anoEditItem', 'actions']

  openDialog(itemAcervo: ItemAcervo | null) {
    const dialogRef = this.dialog.open(ItemAcervoDialogComponent, {
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

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.itemAcervo.map(a=> a.codItem).includes(result.codItem)) {
          console.log(result);
          this.itemAcervoService.updateItemAcervo(result)
          .subscribe(data=> {
            const index = this.itemAcervo.findIndex(a => a.codItem === data.codItem);
            this.itemAcervo[index] = data;
            console.log(data);
            this.tabelaItem.renderRows();
          })
        } else{
          this.itemAcervoService.createItemAcervo(result)
          .subscribe(data => {
            this.itemAcervo.push(data)
            console.log(data);
            this.tabelaItem.renderRows();
          })
        }
      }
    })
  }

  updateItemAcervo(itemAcervo: ItemAcervo) {
    this.openDialog(itemAcervo);
  }

  deleteItemAcervo(codItem: string) {
    this.itemAcervoService.deleteItemAcervo(codItem)
    .subscribe(() => {
      this.itemAcervo = this.itemAcervo.filter(a => a.codItem != codItem);
      window.location.reload();
    })
  }
}
