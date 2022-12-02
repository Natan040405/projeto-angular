import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Local from "../models/local";

@Injectable ({
  providedIn: 'root'
})

export class LocalService {

  localApiUrl = 'https://localhost:7048/local';

  constructor (private http: HttpClient) { }

  getLocal(): Observable<Local[]> {
    return this.http.get<Local[]>(this.localApiUrl)
  }

  createLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(this.localApiUrl, {
      nomeLocal: local.nomeLocal
    });
  }

  updateLocal(local: Local): Observable<Local> {
    return this.http.put<Local>(this.localApiUrl, local);
  }

  deleteLocal(codLocal: string) {
    return this.http.delete(`${this.localApiUrl}?codLocal=${codLocal}`);
  }

}
