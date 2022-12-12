
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import Autor from "../models/autor";


@Injectable({
  providedIn: 'root'
})

export class AutorService {
  autorApiUrl = 'https://localhost:7048/autor';
  constructor(private http: HttpClient) { }

  getAutor(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.autorApiUrl)
  }

  getAutorById(codAutor: string) {
    return this.http.get<Autor>(`${this.autorApiUrl}/${codAutor}`)
  }

  createAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.autorApiUrl, {
      nomeAutor: autor.nomeAutor,
      descAutor: autor.descAutor
    });
  }

  updateAutor(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(this.autorApiUrl, autor);
  }

  deleteAutor(codAutor: string) {
    return this.http.delete(`${this.autorApiUrl}?codAutor=${codAutor}`);

  }

}
