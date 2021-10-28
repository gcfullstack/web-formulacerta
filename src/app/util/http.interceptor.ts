import { MsgService } from './../services/msg.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { tap, catchError } from "rxjs/operators";



@Injectable()
export class HttpInterceptorImpl implements HttpInterceptor {

  constructor(private router: Router,private msgService: MsgService, ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = req.clone(this.setHeaders(req));

    return next.handle(modified).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
       // this.loadingService.esconder();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
      }
    }));
  }

  public setHeaders(req: HttpRequest<any>) {
    return {setHeaders: {'Authorization': this.buildAuthHeader()}, url: environment.urlBase + req.url};
  }

  public buildAuthHeader(): string {
    return 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhcmVhIjoiVEkiLCJwZXJmaXMiOjEsInN1YiI6Imd1aWxoZXJtZS5jYW50b24iLCJub21lIjoiZ3VpbGhlcm1lLmNhbnRvbiIsImlkIjoiMzM0IiwiZXhwIjoxNjQwMDQ0ODAwLCJpbmZvIjoibnVsbCJ9.W31RD779qeNDLsVWAxgomUH-KaleV4TGNG7e8ibJdVEOXIHXhQDhkwVWMSC_3Yu8b9Zid_R7fVAMuUsSInUOeg";
  }





}
