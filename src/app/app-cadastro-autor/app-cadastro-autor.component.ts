import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AutorDialogComponent } from '../autor-dialog/autor-dialog.component';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import Autor from '../models/autor';
import { AutorService } from '../services/autor.service';


@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './app-cadastro-autor.component.html',
  styleUrls: ['./app-cadastro-autor.component.scss'],
  providers: [AutorService]
})

export class AppCadastroAutorComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public autorService: AutorService
    ) {
      this.autorService.getAutor()
    .subscribe(data => {
      this.autor = data
    })

    }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  ngOnInit(): void {
  }

  @ViewChild(MatTable)
  tabelaAutor!: MatTable<any>
  autor: Autor[] = [];
  displayedColumns: string[] = ['codAutor', 'nomeAutor', 'descAutor', 'actions']


  openDialog(autor: Autor | null) {
    const dialogRef = this.dialog.open(AutorDialogComponent, {
      width: '40%',
      data: autor != null ?
      autor : {
        nomeAutor: '',
        codAutor: '',
        descAutor: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.autor.map(a => a.codAutor).includes(result.codAutor)) {
          this.autorService.updateAutor(result)
          .subscribe(data => {
            const index = this.autor.findIndex(a => a.codAutor === data.codAutor);
            this.autor[index] = data;
            this.tabelaAutor.renderRows();
            window.location.reload();
          })
        } else{
          this.autorService.createAutor(result)
          .subscribe(data => {
            this.autor.push(data)
            this.tabelaAutor.renderRows();
            window.location.reload();
          })
        }
      }
    });

  }

  updateAutor(autor: Autor) {
    this.openDialog(autor);


  }

  deleteAutor(codAutor: string) {
    this.autorService.deleteAutor(codAutor)
    .subscribe(() => {
      this.autor = this.autor.filter(a => a.codAutor != codAutor);
      window.location.reload();
    })
  }
}


