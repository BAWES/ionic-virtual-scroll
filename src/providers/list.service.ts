import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListService {

  private _endpoint: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(public http: Http) {
  }

  getData(){
    const head = new Headers();
    head.append("Content-Type", "application/json");
    let url = `${this._endpoint}`;
    
    return this.http.get(url, {headers: head}).map(resp => resp.json());
  }

}
