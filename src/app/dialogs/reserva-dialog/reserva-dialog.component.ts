import { LeitorDialogComponent } from './../leitor-dialog/leitor-dialog.component';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import Reserva from "src/app/models/reserva";
import Leitor from 'src/app/models/leitor';

interface mov{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.scss']
})

export class ReservaDialogComponent implements OnInit {

  isChange!: boolean;

  movs: mov[] = [
    {value: 'Reservar', viewValue: 'Reservar'},
    {value: 'Devolver', viewValue: 'Devolver'},
  ]

  constructor(public dialogref: MatDialogRef<ReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reserva,
    public dialogrefleitor: MatDialogRef<LeitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataleitor: Leitor,) {

  }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogref.close();
  }
}

