import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import Leitor from '../models/leitor';

@Injectable ({
  providedIn: 'root'
})

export class LeitorService {

  leitorApiUrl = 'https://localhost:7048/leitor';

  constructor (private http: HttpClient) { }

  getLeitor(): Observable<Leitor[]> {
    return this.http.get<Leitor[]>(this.leitorApiUrl)
  }

  createLeitor(leitor: Leitor): Observable<Leitor> {
    return this.http.post<Leitor>(this.leitorApiUrl, {
      nomeLeitor: leitor.nomeLeitor,
      sexoLeitor: leitor.sexoLeitor,
      dataNascimento: leitor.dataNascimento,
      cpfLeitor: leitor.cpfLeitor,
      rgLeitor: leitor.rgLeitor,
      emailLeitor: leitor.emailLeitor,
      telefLeitor: leitor.telefLeitor,
      cellLeitor: leitor.cellLeitor,
      endRuaLeitor: leitor.endRuaLeitor,
      endBairroLeitor: leitor.endBairroLeitor,
      endCidadeLeitor: leitor.endCidadeLeitor,
      endCepLeitor: leitor.endCepLeitor,
      endUFLeitor: leitor.endUFLeitor,
      endNumeroLeitor: leitor.endNumeroLeitor
  });
  }

  updateLeitor(leitor: Leitor): Observable<Leitor> {
    return this.http.put<Leitor>(this.leitorApiUrl, leitor);
  }

  deleteLeitor(codLeitor: string) {
    return this.http.delete(`${this.leitorApiUrl}?codLeitor=${codLeitor}`);
  }
}

