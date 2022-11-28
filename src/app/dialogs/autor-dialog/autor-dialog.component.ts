
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Autor from '../../models/autor';

@Component ({
  selector: 'app-autor-dialog',
  templateUrl: './autor-dialog.component.html',
  styleUrls: ['./autor-dialog.component.scss']
})

export class AutorDialogComponent implements OnInit {

  isChange!: boolean;

  constructor(public dialogRef: MatDialogRef<AutorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Autor,) {}

  ngOnInit(): void {
    if(this.data.codAutor != ''){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(){
    this.dialogRef.close();
  }
}
