import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import Local from "src/app/models/local";

@Component ({
  selector:'local-dialog',
  templateUrl:'./local-dialog.component.html',
  styleUrls:['./local-dialog.component.scss']
})

export class LocalDialogComponent implements OnInit {

  constructor (public dialogref: MatDialogRef<LocalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Local) {

  }

  isChange!: boolean;

  ngOnInit(): void {
    if (this.data.codLocal != ''){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(){
    this.dialogref.close();
  }

}
