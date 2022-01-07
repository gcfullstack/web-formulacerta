import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrcTrailService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(page): Observable<any> {
    return this.http.get<any>('orcamento-trail/' + page);
  }

  executarIntegracao(): Observable<any> {
    return this.http.post<any>('public/integrar',{});
  }

  teste(): Observable<any> {
    return this.http.get<any>('public/integrar',{});
  }
}
