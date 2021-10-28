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

  findAll(): Observable<any> {
    return this.http.get<any>('orcamento-trail');
  }

  executarIntegracao(): Observable<any> {
    return this.http.post<any>('integrar',{});
  }
}
