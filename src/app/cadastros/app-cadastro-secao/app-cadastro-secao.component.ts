import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { SecaoDialogComponent } from "src/app/dialogs/secao-dialog/secao-dialog.component";
import Secao from "src/app/models/secao";
import { SecaoService } from "src/app/services/secao.service";

@Component({
  selector: 'app-cadastro-secao',
  templateUrl:'./app-cadastro-secao.component.html',
  styleUrls:['./app-cadastro-secao.component.scss']
})
export class AppCadastroSecaoComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    public dialog: MatDialog,
    public secaoService: SecaoService) {
    this.secaoService.getSecao()
    .subscribe(data=>{
      this.secao = data
    })
  }

  @ViewChild(MatTable)
  tabelaSecao!: MatTable<any>
  secao: Secao[] = []
  displayedColumns: string[] = ['codSecao', 'nomeSecao', 'actions'];

  openDialog(secao: Secao | null) {
    const dialogRef = this.dialog.open(SecaoDialogComponent, {
      width: '40%',
      data: secao != null ?
      secao : {
        nomeSecao: '',
        codSecao: '',
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.secao.map(a => a.codSecao).includes(result.codSecao)) {
          this.secaoService.updateSecao(result)
          .subscribe(data => {
            console.log(result);
            const index = this.secao.findIndex(a => a.codSecao === data.codSecao);
            this.secao[index] = data;
            this.tabelaSecao.renderRows();
            window.location.reload();
          })
        } else{
          this.secaoService.createSecao(result)
          .subscribe(data => {
            console.log(result);
            this.secao.push(data)
            this.tabelaSecao.renderRows();
            window.location.reload();
          })
        }
      }
    });
  }

  updateSecao(secao: Secao) {
    this.openDialog(secao);
  }

  deleteSecao(codSecao: string) {
    this.secaoService.deleteSecao(codSecao)
    .subscribe(() => {
      this.secao = this.secao.filter(a => a.codSecao != codSecao);
      window.location.reload();
    })
  }
}
