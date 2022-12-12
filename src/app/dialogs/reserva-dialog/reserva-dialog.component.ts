import { AutorService } from 'src/app/services/autor.service';
import { LeitorService } from './../../services/leitor.service';
import { ItemAcervoService } from './../../services/itemAcervo.service';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import ItemAcervo from 'src/app/models/itemAcervo';
import Reserva from "src/app/models/reserva";
import Leitor from 'src/app/models/leitor';
import Autor from 'src/app/models/autor';

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

  itemAcervo: ItemAcervo[] = []

  ItensAcervo: ItemAcervo[] = []

  autor:Autor[] = []

  Autores: Autor[] = []

  leitor: Leitor[] = []

  Leitores: Leitor[] = []

  isChange!: boolean;

  isValidItem!: boolean;

  isValidLeitor!: boolean;

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
      this.itemAcervo = [data];
      if(data!=null){
        this.data.nomeItemReserva = data.nomeItem;
        this.data.numExemplar = data.numExemplar;
        this.data.tipoItemReserva = data.tipoItem;
        this.data.localizacao = data.localizacaoItem;
      }
    })
  }

  f3codLeitor() {
    if(this.isValidLeitor != true){
      this.isValidLeitor = true;
    } else {
      this.isValidLeitor = false;
    }
    this.leitorService.getLeitorById(this.data.codLeitor).subscribe(data =>{
      this.leitor = [data];
      if(data != null) {
        this.data.nomeLeitor = data.nomeLeitor;
      }
    })
  }

  onCancel() {
    this.dialogref.close();
  }
}

