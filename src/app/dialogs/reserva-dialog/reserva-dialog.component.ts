import { LeitorService } from './../../services/leitor.service';
import { ItemAcervoService } from './../../services/itemAcervo.service';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import ItemAcervo from 'src/app/models/itemAcervo';
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

  isValidItem!: boolean;

  itemAcervo: ItemAcervo[] = []

  ItensAcervo: ItemAcervo[] = []

  Leitores: Leitor[] = []

  movs: mov[] = [
    {value: 'Reservar', viewValue: 'Reservar'},
    {value: 'Devolver', viewValue: 'Devolver'},
  ]

  constructor(public dialogref: MatDialogRef<ReservaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reserva,
    public itemAcervoService: ItemAcervoService,
    public leitorService: LeitorService) {

  }

  ngOnInit(): void {
    this.itemAcervoService.getItemAcervo().subscribe(data => {
      this.ItensAcervo = data;
    })
    this.leitorService.getLeitor().subscribe(data => {
      this.Leitores = data;
    })
  }

  f3codItem() {
    if(this.isValidItem != true){
      this.isValidItem = true;
    } else {
      this.isValidItem = false;
    }
    this.itemAcervoService.getItemAcervoById(this.data.codItemReserva).subscribe(data => {
      this.itemAcervo = data;
      console.log(this.itemAcervo)
    })
  }

  onCancel() {
    this.dialogref.close();
  }
}

