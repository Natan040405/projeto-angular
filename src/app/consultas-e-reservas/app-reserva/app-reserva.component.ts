import { Component } from "@angular/core";
import Reserva from "src/app/models/reserva";

interface mov{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserva',
  templateUrl:'./app-reserva.component.html',
  styleUrls:['./app-reserva.component.scss']
})
export class AppReservaComponent{

  reserva: Reserva[];
  displayedColumns: string[] = ['codItemReserva', 'situacao', "nomeItemReserva", "numExemplar",
  "tipoItemReserva", "localizacao", "codLeitor", "nomeLeitor", "dataReserva", "prazoReserva"]

  movs: mov[] = [
    {value: 'Reservar', viewValue: 'Reservar'},
    {value: 'Devolver', viewValue: 'Devolver'},
  ]

  isModalLeitorOpened: boolean = false;
  modalF3Leitor(): void{
    this.isModalLeitorOpened =  !this.isModalLeitorOpened;
  }

  isModalItemOpened: boolean = false;
  modalF3Item(): void{
    this.isModalItemOpened =  !this.isModalItemOpened;
  }

  openDialog(reserva: Reserva | null) {

  }
}
