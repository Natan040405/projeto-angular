import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import Editora from 'src/app/models/editora';

@Component ({
  selector: 'app-editora-dialog',
  templateUrl: './editora-dialog.component.html',
  styleUrls: ['./editora-dialog.component.scss']
})

export class EditoraDialogComponent implements OnInit {

  isChange!: boolean;

  constructor(public dialogref: MatDialogRef<EditoraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Editora) {}

  ngOnInit(): void {
    if(this.data.codEditora != ''){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(){
    this.dialogref.close();
  }
}
