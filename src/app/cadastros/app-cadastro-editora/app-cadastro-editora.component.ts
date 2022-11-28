import { MatTable } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import Editora from 'src/app/models/editora';
import { EditoraDialogComponent } from 'src/app/dialogs/editora-dialog/editora-dialog.component';
import { EditoraService } from 'src/app/services/editora.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './app-cadastro-editora.component.html',
  styleUrls: ['./app-cadastro-editora.component.scss'],
  providers: [EditoraService]
})
export class AppCadastroEditoraComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public editoraService: EditoraService) {
    this.editoraService.getEditora()
    .subscribe(data=>{
      this.editora = data
    })
  }
  ngOnInit(): void {
  }

@ViewChild(MatTable)
tabelaEditora!: MatTable<any>
editora: Editora[] = [];
displayedColumns: string[] = ['codEditora', 'nomeEditora', 'actions']

openDialog(editora: Editora | null) {
  const dialogRef = this.dialog.open(EditoraDialogComponent, {
    width: '40%',
    data: editora != null ?
    editora : {
      nomeEditora: '',
      codEditora: '',
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result !== undefined) {
      if(this.editora.map(a => a.codEditora).includes(result.codEditora)) {
        this.editoraService.updateEditora(result)
        .subscribe(data => {
          console.log(result);
          const index = this.editora.findIndex(a => a.codEditora === data.codEditora);
          this.editora[index] = data;
          this.tabelaEditora.renderRows();
          window.location.reload();
        })
      } else{
        this.editoraService.createEditora(result)
        .subscribe(data => {
          console.log(result);
          this.editora.push(data)
          this.tabelaEditora.renderRows();
          window.location.reload();
        })
      }
    }
  });
}

updateEditora(editora: Editora) {
  this.openDialog(editora);
}

deleteEditora(codEditora: string) {
  this.editoraService.deleteEditora(codEditora)
  .subscribe(() => {
    this.editora = this.editora.filter(a => a.codEditora != codEditora);
    window.location.reload();
  })
}

}
