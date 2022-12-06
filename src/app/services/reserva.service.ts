import Reserva from 'src/app/models/reserva';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ReservaService {


  reservaApiUrl = 'https://localhost:7048/reserva';

  constructor (private http: HttpClient) {

  }

  getReserva(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.reservaApiUrl)
  }

  createReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.reservaApiUrl, {
      codItemReserva: reserva.codItemReserva,
      situacao: reserva.situacao,
      nomeItemReserva: reserva.nomeItemReserva,
      numExemplar: reserva.numExemplar,
      tipoItemReserva: reserva.tipoItemReserva,
      localizacao: reserva.localizacao,
      codLeitor: reserva.codLeitor,
      nomeLeitor: reserva.nomeLeitor,
      dataReserva: reserva.dataReserva,
      prazoReserva: reserva.prazoReserva
    })
  }

  updateReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(this.reservaApiUrl, reserva);
  }

  deleteReserva(codItemReserva: string) {
    return this.http.delete(`${this.reservaApiUrl}?codItemReserva=${codItemReserva}`);
  }
}
