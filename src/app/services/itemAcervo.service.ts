import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Autor from "../models/autor";
import ItemAcervo from "../models/itemAcervo";

@Injectable({
  providedIn: 'root'
})

export class ItemAcervoService {
  itemAcervoApiUrl = 'https://localhost:7048/itemacervo';
  autorApiUrl = 'https://localhost:7048/autor';
  constructor(private http: HttpClient) { }

  getAutor(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.autorApiUrl)
  }

  getItemAcervo(): Observable<ItemAcervo[]> {
    return this.http.get<ItemAcervo[]>(this.itemAcervoApiUrl)
  }

  createItemAcervo(itemAcervo: ItemAcervo): Observable<ItemAcervo> {
    return this.http.post<ItemAcervo>(this.itemAcervoApiUrl, {
      codLocal: itemAcervo.codLocal,
      numExemplar: itemAcervo.numExemplar,
      nomeItem: itemAcervo.nomeItem,
      codAutor: itemAcervo.codAutor,
      nomeAutor: itemAcervo.nomeAutor,
      codEditora: itemAcervo.codEditora,
      nomeEditora: itemAcervo.nomeEditora,
      tipoItem: itemAcervo.tipoItem,
      nomeLocal: itemAcervo.nomeLocal,
      volItem: itemAcervo.volItem,
      anoEditItem: itemAcervo.anoEditItem,
      localizacaoItem: itemAcervo.localizacaoItem,
      secaoItem: itemAcervo.secaoItem,
    });
  }

  updateItemAcervo(itemAcervo: ItemAcervo): Observable<ItemAcervo> {
    return this.http.put<ItemAcervo>(this.itemAcervoApiUrl, itemAcervo);
  }

  deleteItemAcervo(codItem: string) {
    return this.http.delete(`${this.itemAcervoApiUrl}?codItem=${codItem}`);

  }
}
