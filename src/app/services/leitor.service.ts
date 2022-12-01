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

}

