import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LocalDialogComponent } from './../../dialogs/local-dialog/local-dialog.component';
import { Component, OnInit, ViewChild } from "@angular/core";
import Local from "src/app/models/local";
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-cadastro-local',
  templateUrl:'./app-cadastro-local.component.html',
  styleUrls:['./app-cadastro-local.component.scss']
})
export class AppCadastroLocalComponent implements OnInit{

  constructor (public dialog: MatDialog,
    public localService: LocalService) {
        this.localService.getLocal()
        .subscribe(data => {
          this.local = data
        })
  }

  ngOnInit(): void {
  }

  @ViewChild(MatTable)
  tabelaLocal!: MatTable<any>
  local: Local[] = [];
  displayedColumns: string[] = ['codLocal', 'nomeLocal', 'actions']

  openDialog(local: Local | null) {
    const dialogRef = this.dialog.open(LocalDialogComponent, {
      width: '40%',
      data: local != null ?
      local : {
        codLocal: '',
        nomeLocal: '',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.local.map(a => a.codLocal).includes(result.codLocal)) {
          this.localService.updateLocal(result)
          .subscribe(data => {
            const index = this.local.findIndex(a => a.codLocal === data.codLocal);
            this.local[index] = data;
            this.tabelaLocal.renderRows();
            window.location.reload();
          })
        } else{
          console.log(result);
          this.localService.createLocal(result)
          .subscribe(data => {
            console.log(result);
            this.local.push(data)
            this.tabelaLocal.renderRows();
            window.location.reload();
          })
        }
      }
    });
  }

  updateLocal(local: Local) {
    this.openDialog(local);
  }

  deleteLocal(codLocal: string) {
    this.localService.deleteLocal(codLocal)
    .subscribe(() => {
      this.local = this.local.filter(a => a.codLocal != codLocal);
      this.tabelaLocal.renderRows();
      window.location.reload();
    })
  }

}
