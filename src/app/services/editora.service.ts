import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import Editora from '../models/editora';

@Injectable({
  providedIn: 'root'
})

export class EditoraService {
  editoraApiUrl = 'https://localhost:7048/editora';
  constructor(private http: HttpClient) { }

  getEditora(): Observable<Editora[]> {
    return this.http.get<Editora[]>(this.editoraApiUrl)
  }

  getEditoraById(codEditora: string) {
    return this.http.get<Editora[]>(`${this.editoraApiUrl}/${codEditora}`);
  }

  createEditora(editora: Editora): Observable<Editora> {
    return this.http.post<Editora>(this.editoraApiUrl, {
      nomeEditora: editora.nomeEditora,
    });
  }

  updateEditora(editora: Editora): Observable<Editora> {
    return this.http.put<Editora>(this.editoraApiUrl, editora);
  }

  deleteEditora(codEditora: string) {
    return this.http.delete(`${this.editoraApiUrl}?codEditora=${codEditora}`);

  }
}
