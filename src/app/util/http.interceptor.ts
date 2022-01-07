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
    return 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJKV1QgQXR0aXZlIiwiaWF0IjoxNjQxNTE3NjAyLCJleHAiOjE4OTM5Nzk2MzAsImF1ZCI6ImFwaS5mb3JtdWxhY2VydGEiLCJzdWIiOiJmb3JtdWxhY2VydGEiLCJHaXZlbk5hbWUiOiJGb3JtdWxhIENlcnRhIn0.6IkschU0vldjNpg4GES-0WmRVeizzVSvA7uJxF9sPupMNEY03sgFfG0gM5iSwJJjWZoW-qyVwhFFZt3yOI2JCw";
  }





}
