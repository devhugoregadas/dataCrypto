import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: HttpClient) {}

  async doRequestHttp() {
    const url = "";
    //build observable requesst
    const request = this._http.get(url);
    //extract reponse
    const reponse = await firstValueFrom(request);
    //return data
    return reponse;
  }

}