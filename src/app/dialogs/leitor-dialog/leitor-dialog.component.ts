import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Leitor from 'src/app/models/leitor';

interface Uf {
  value: string;
  viewValue: string;
}

@Component ({
  selector: 'leitor-dialog',
  templateUrl: './leitor-dialog.component.html',
  styleUrls: ['./leitor-dialog.component.scss']
})

export class LeitorDialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<LeitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leitor) { }

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

  isChange!: boolean;

  ngOnInit(): void {
    if(this.data.codLeitor != ''){
      this.isChange = true;
    }else{
      this.isChange = false;
    }  }

    onCancel() {
      this.dialogref.close();
    }

}

