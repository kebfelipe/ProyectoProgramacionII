import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model_Paciente } from '../model/model_Paciente';
import { PacientesService } from '../service/servicePacientes/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Model_Paciente[] = [];
  //defino dos variables en el constructor, router para tener acceso a las rutas, y serviceAppPacientesSErvice para tener acceso al service de pacientes
  constructor(
    private router:Router,
    public serviceAppPacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    //estoy opteniendo la información de los pacientes desde el service, y cada paciente que viene en la variable response lo almaceno en el array pacientes
    this.serviceAppPacientesService.get("pacientes")
      .subscribe((response: any) => {
        this.pacientes = response;
      });
  }

  //esta función esta asignada en el boton para agregar un paciente, y para editarlo, si el parametro es 0 se agregará un paciente, de lo contrario de va a editar al paciente seleccionado
  verPaciente(idPaciente: any) : void{
    if(idPaciente == 0){
      this.router.navigate(['/paciente']);
    }else{
      this.router.navigate(['/paciente/' + idPaciente]);
    }
  }

  //Esta función se encarga de eliminar al paciente, obtenemos su id por parametro, y luego enviamos esa información al service para que lo elimine de la base de datos
  eliminarPaciente(idPaciente: any): void{
    console.log(idPaciente);
    
    this.serviceAppPacientesService.delete("pacientes/"+idPaciente)
      .subscribe((response: any) => {
        window.location.reload();
      });
  }


}
