
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import Editora from 'src/app/models/editora';

@Component ({
  selector: 'app-editora-dialog',
  templateUrl: './editora-dialog.component.html',
  styleUrls: ['./editora-dialog.component.scss']
})

export class EditoraDialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<EditoraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Editora) {}

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogref.close();
  }
}
