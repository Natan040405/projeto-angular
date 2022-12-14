import  ConsultaReserva  from 'src/app/models/consulta';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class ConsultaService {
    consultasApiUrl = 'https://localhost:7048/filtros';
    constructor(private http: HttpClient) { }

    GetByFilter(): Observable<ConsultaReserva[]> {
        return this.http.get<ConsultaReserva[]>(this.consultasApiUrl)
    }
}
