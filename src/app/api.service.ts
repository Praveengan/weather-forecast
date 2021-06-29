import { HttpClient, HttpParams } from "@angular/common/http";

import { ApiResponse } from "./app.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

declare const server_properties;

@Injectable()
export class APIService {
  constructor(private _http: HttpClient) {}

  public getWeather(city: string): Observable<ApiResponse>{
    const params = new HttpParams().set('city', city);
    return this.getEntityByQueryParam(`${server_properties.apiBaseUrl}/weather`, params);
  }

  private getEntityByQueryParam(
    path: string,
    params: HttpParams
  ): Observable<any> {
    return this._http.get(path, {
        params: params
      })
  }
}
