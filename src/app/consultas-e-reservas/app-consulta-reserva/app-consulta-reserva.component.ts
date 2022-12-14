import { ConsultaService } from './../../services/consultas.service';
import { Component, OnInit } from '@angular/core';
import ConsultaReserva from 'src/app/models/consulta';
import { MatTableDataSource } from '@angular/material/table';

const consultaReserva: ConsultaReserva[] = []
@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './app-consulta-reserva.component.html',
  styleUrls: ['./app-consulta-reserva.component.scss'],
  providers: [ConsultaService]
})
export class AppConsultaReservaComponent implements OnInit{

  consultaReserva: ConsultaReserva[] = [];
  displayedColumns: string[] = ['codItem', 'nomeItem', 'codLeitor', 'localizacao',
   'tipoItem', 'codAutor', 'nomeAutor','codSecao', 'nomeSecao', 'situacao', 'actions'];
   consulta = new MatTableDataSource(consultaReserva)
   search(event: Event) {
    const searchValue  = (event.target as HTMLInputElement).value;
    this.consulta.filter = searchValue.trim().toLowerCase();
  }

  constructor(public consultaService: ConsultaService) {

  }
  ngOnInit(): void {
    console.log(this.consultaReserva)
    this.consultaService.GetByFilter()
    .subscribe(consulta => {
      this.consultaReserva = consulta
    })
  }


}
