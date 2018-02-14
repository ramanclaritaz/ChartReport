import { Injectable, Inject } from '@angular/core';
import { environment } from "../app/app.environment";
import { RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

import 'rxjs/Rx';

import 'rxjs/add/operator/map';


@Injectable()
export class httpService {
  headers:any;
  constructor( @Inject(Http) private http: Http) {
    this.headers = new Headers();
  }

  private extractData(res: Response): Observable<any> {
    return res.json();
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occured...!')
    console.log(error);
    return Observable.throw(error.message | error);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    return this.http.request(url, this.getRequestOptionArgs(options)).map(this.extractData).catch(this.handleError);
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<any> {
    url = this.updateUrl(url);
    return this.http.get(url, this.getRequestOptionArgs(options)).map(this.extractData).catch(this.handleError);
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    url = this.updateUrl(url);
    return this.http.post(url, body, this.getRequestOptionArgs(options)).map(this.extractData).catch(this.handleError);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
    url = this.updateUrl(url);
    return this.http.put(url, this.getRequestOptionArgs(options)).map(this.extractData).catch(this.handleError);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    url = this.updateUrl(url);
    return this.http.delete(url, this.getRequestOptionArgs(options)).map(this.extractData).catch(this.handleError);
  }

  private updateUrl(req: string) {
    return environment.origin + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Access-Control-Allow-Origin', '*');
    return options;
  }

}
