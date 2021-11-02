import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../model/Medico';
import  {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ServiceAppMedicoService {
  private url:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { 
  }

  get(endpoint:string){
    return this.http.get(this.url + endpoint);
  }
}
