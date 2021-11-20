import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  //Hacemos la conexion al backend
  private url:string = "http://localhost:8080/";  

  constructor(private http:HttpClient) { 
  }

  //con esta funcion estamos trayendo todos los usuarios de la base de datos
  get(endpoint:string){
    return this.http.get(this.url + endpoint);
  }

  //Guardamos un paciente en  la base de datos
  postPaciente(endpoint:string, data:any){
    return this.http.post(this.url + endpoint, data);
  }
  //Editamos un paciente de la base de datos
  putPaciente(endpoint:string, data:any){
    return this.http.put(this.url + endpoint, data);
  }
  //Eliminamos un paciente de la base de datos
  delete(endpoint:string){
    return this.http.delete(this.url + endpoint);
  }
}
