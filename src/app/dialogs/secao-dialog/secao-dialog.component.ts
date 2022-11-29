import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import Secao from "src/app/models/secao";

@Component ({
  selector: 'secao-dialog',
  templateUrl: './secao-dialog.component.html',
  styleUrls: ['./secao-dialog.component.scss']
})

export class SecaoDialogComponent implements OnInit{

  constructor(public dialogref: MatDialogRef<SecaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Secao) { }

    ngOnInit(): void {
    }

  onCancel(){
    this.dialogref.close();
  }

}
