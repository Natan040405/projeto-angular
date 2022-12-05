import { MatTable } from '@angular/material/table';
import { ReservaService } from './../../services/reserva.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservaDialogComponent } from './../../dialogs/reserva-dialog/reserva-dialog.component';
import { Component, ViewChild } from "@angular/core";
import Reserva from "src/app/models/reserva";
import Leitor from 'src/app/models/leitor';

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

  constructor (public dialog: MatDialog,
    public reservaService: ReservaService) {
      this.reservaService.getReserva()
      .subscribe(data => {
      this.reserva = data
      })
  }

  @ViewChild(MatTable)
  tabelaReserva!: MatTable<any>
  reserva: Reserva[];
  leitor: Leitor[];
  displayedColumns: string[] = ['codItemReserva', 'situacao', "nomeItemReserva", "numExemplar",
  "tipoItemReserva", "localizacao", "codLeitor", "nomeLeitor", "dataReserva", "prazoReserva"]

  movs: mov[] = [
    {value: 'Reservar', viewValue: 'Reservar'},
    {value: 'Devolver', viewValue: 'Devolver'},
  ]

  isModalReservaOpened: boolean = false;
  modalF3Reserva(): void{
    this.isModalReservaOpened =  !this.isModalReservaOpened;
  }

  isModalItemOpened: boolean = false;
  modalF3Item(): void{
    this.isModalItemOpened =  !this.isModalItemOpened;
  }

  openDialog(reserva: Reserva | null) {
    const dialogRef = this.dialog.open(ReservaDialogComponent, {
      width: '50%',
      data: reserva != null ?
      reserva: {
        codItemReserva: '',
        nomeItemReserva: '',
        situacao: '',
        numExemplar: '',
        tipoItemReserva: '',
        localizacao: '',
        codLeitor: '',
        nomeLeitor: '',
        dataReserva: '',
        prazoReserva: ''
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.reserva.map(a=> a.codItemReserva).includes(result.codItemReserva)) {
          this.reservaService.updateReserva(result)
          .subscribe(data=> {
            const index = this.reserva.findIndex(a => a.codItemReserva === data.codItemReserva);
            this.reserva[index] = data;
            this.tabelaReserva.renderRows();
            window.location.reload();
          })
        } else{
          this.reservaService.createReserva(result)
          .subscribe(data => {
            console.log(data);
            this.reserva.push(data)
            console.log(data);
            this.tabelaReserva.renderRows();
            window.location.reload();
          })
        }
      }
    })
  }
}
