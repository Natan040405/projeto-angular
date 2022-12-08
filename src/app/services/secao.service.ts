import Secao from 'src/app/models/secao';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SecaoService{

  constructor(private http: HttpClient) { }
  secaoApiUrl = 'https://localhost:7048/secao';

  getSecao(): Observable<Secao[]> {
    return this.http.get<Secao[]>(this.secaoApiUrl)
  }

  getSecaoById(codSecao: string) {
    return this.http.get<Secao[]>(`${this.secaoApiUrl}/${codSecao}`)
  }

  createSecao(secao: Secao): Observable<Secao> {
    return this.http.post<Secao>(this.secaoApiUrl, {
      nomeSecao: secao.nomeSecao,
    });
  }

  updateSecao(secao: Secao): Observable<Secao> {
    return this.http.put<Secao>(this.secaoApiUrl, secao);
  }

  deleteSecao(codSecao: string) {
    return this.http.delete(`${this.secaoApiUrl}?codSecao=${codSecao}`);

  }
}
