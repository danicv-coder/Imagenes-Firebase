import { Catalog } from './../model/catalog';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCatalgService {

  constructor( private http: HttpClient) { }

  ImageCatalog(pathh : string){
    const path = `$`;
    console.log(path)
    return this.http.get<Catalog>(path);
}
}
