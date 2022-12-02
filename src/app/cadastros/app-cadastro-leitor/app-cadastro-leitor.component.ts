import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTable } from "@angular/material/table";
import { LeitorDialogComponent } from "src/app/dialogs/leitor-dialog/leitor-dialog.component";
import Leitor from "src/app/models/leitor";
import { LeitorService } from "src/app/services/leitor.service";

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

  constructor(
    public dialog: MatDialog,
    public leitorService: LeitorService
    ){
      this.leitorService.getLeitor()
    .subscribe(data => {
      this.leitor = data
    })
  }

  @ViewChild(MatTable)
  tabelaLeitor!: MatTable<any>
  leitor: Leitor[] = [];
  displayedColumns: string[] = ['codLeitor', 'nomeLeitor', 'sexoLeitor', 'dataNascimento', 'cpfLeitor',
   'rgLeitor', 'emailLeitor', 'telefLeitor', 'cellLeitor', 'endRuaLeitor', 'endBairroLeitor',
   'endCidadeLeitor', 'endCepLeitor', 'endUFLeitor', 'endNumeroLeitor', 'actions' ]

  openDialog(leitor: Leitor | null) {
      const dialogRef = this.dialog.open(LeitorDialogComponent, {
        width: '100%',
        data: leitor != null ?
        leitor : {
          codLeitor: '',
          nomeLeitor: '',
          sexoLeitor: '',
          dataNascimento: '',
          cpfLeitor: '',
          rgLeitor: '',
          emailLeitor: '',
          telefLeitor: '',
          cellLeitor: '',
          endRuaLeitor: '',
          endBairroLeitor: '',
          endCidadeLeitor: '',
          endCepLeitor: '',
          endUFLeitor: '',
          endNumeroLeitor: '',
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result !== undefined) {
          if(this.leitor.map(a=> a.codLeitor).includes(result.codLeitor)) {
            this.leitorService.updateLeitor(result)
            .subscribe(data=> {
              const index = this.leitor.findIndex(a => a.codLeitor === data.codLeitor);
              this.leitor[index] = data;
              this.tabelaLeitor.renderRows();
              window.location.reload();
            })
          } else{
            this.leitorService.createLeitor(result)
            .subscribe(data => {
              console.log(data);
              this.leitor.push(data)
              console.log(data);
              this.tabelaLeitor.renderRows();
              window.location.reload();
            })
          }
        }
      })
  }

  updateLeitor(leitor: Leitor) {
    this.openDialog(leitor);
  }

  deleteLeitor(codLeitor: string) {
    this.leitorService.deleteLeitor(codLeitor)
    .subscribe(() => {
      this.leitor = this.leitor.filter(a => a.codLeitor != codLeitor);
      window.location.reload();
    })
  }
}
