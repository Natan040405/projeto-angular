import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import ItemAcervo from "src/app/models/itemAcervo";

interface Tipo {
  value: string;
  viewValue: string;
}

@Component ({
  selector: 'itemAcervo-dialog',
  templateUrl: './itemAcervo-dialog.component.html',
  styleUrls: ['./itemAcervo-dialog.component.scss']
})



export class ItemAcervoDialogComponent implements OnInit{

  Tipos: Tipo[] = [
    {value:'livro' , viewValue:'Livro'},
    {value:'revista' , viewValue:'Revista'},
    {value:'jornal' , viewValue:'Jornal'},
    {value:'dvdcd' , viewValue:'DVD/CD'},
    {value:'folheto' , viewValue:'Folheto'},
    {value:'artigo' , viewValue:'Artigo'},
  ];

  isChange!: boolean;

  constructor(public dialogref: MatDialogRef<ItemAcervoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemAcervo) { }

  ngOnInit(): void {
    if(this.data.codItem != ''){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

  onCancel(){
    this.dialogref.close();
  }

}
